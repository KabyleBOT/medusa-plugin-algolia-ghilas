import { defaultSearchIndexingProductRelations } from "@medusajs/utils";

const productRelations = [
	...defaultSearchIndexingProductRelations,
	"categories",
];

// Helper functions
function getCheapestVariant(variants) {
	return variants.reduce(
		(acc, curr) =>
			acc.calculated_price >
			curr.calculated_price
				? curr
				: acc,
		variants[0]
	);
}

function calculatePercentageDifference(
	calculated_price,
	original_price
) {
	if (
		calculated_price === original_price
	) {
		return 0;
	}
	const percentageDifference =
		(calculated_price -
			original_price) /
		original_price;
	return Math.round(
		percentageDifference * 100
	);
}

// Optimization 1: Use Set instead of Array for unique values
function getOptionValue(
	option,
	variants
) {
	const { id } = option;
	const values = new Set(
		variants.reduce((acc, variant) => {
			const value =
				variant.options.find(
					(o) => o.option_id === id
				)?.value;
			acc.add(value);
			return acc;
		}, new Set())
	);
	return values.size === 1
		? [...values][0]
		: [...values];
}

function processProductOptions(
	product
) {
	const productOptions = {};
	if (
		product.options &&
		product.variants &&
		product.variants.length > 0
	) {
		product.options.forEach(
			(option) => {
				productOptions[option.title] =
					getOptionValue(
						option,
						product.variants
					);
			}
		);
	}
	return productOptions;
}

async function getRootCategory(
	category,
	container
) {
	let currentCategory = category;
	const productCategoryService =
		container.productCategoryService;

	if (
		currentCategory.parent_category_id ===
		null
	) {
		return null;
	}

	while (
		currentCategory.parent_category_id !==
		null
	) {
		const parentId =
			currentCategory.parent_category_id;
		const name = currentCategory.name;
		currentCategory =
			await productCategoryService.retrieve(
				parentId
			);

		if (!currentCategory) {
			container.logger.error(
				`Parent Category not found for : ${name} with id: ${parentId}`
			);
		}
	}

	return currentCategory;
}

async function findCategoryAndCreateHierarchy(
	categoryId,
	rootCategory,
	path = ""
) {
	if (!rootCategory) {
		return null;
	}
	const taxonomyObject = rootCategory;
	const newPath =
		path.length > 0
			? `${path}.${taxonomyObject?.id}`
			: `${taxonomyObject?.id}`;

	if (
		taxonomyObject?.id === categoryId
	) {
		const levels = newPath
			.split(".")
			.map((s) => s.trim());
		return levels?.map((level, index) =>
			levels
				.slice(0, index + 1)
				.join(".")
		);
	}

	const results = await Promise.all(
		taxonomyObject?.category_children?.map(
			(child) =>
				findCategoryAndCreateHierarchy(
					categoryId,
					child,
					newPath
				)
		)
	);

	for (let result of results) {
		if (result !== null) {
			return result;
		}
	}

	return null;
}

// Optimization 2: Avoid unnecessary recursion
function categoryExistsInHierarchy(
	categoryId,
	parentCategory
) {
	if (
		!parentCategory ||
		!parentCategory.category_children ||
		parentCategory.category_children
			.length === 0
	) {
		return false;
	}
	for (let child of parentCategory.category_children) {
		if (
			child.id === categoryId ||
			categoryExistsInHierarchy(
				categoryId,
				child
			)
		) {
			return true;
		}
	}
	return false;
}

async function processProductTaxonomies(
	product,
	container
) {
	const productTaxonomies = {};
	let hierarchicalTaxonomies = {};
	let MainSections = [];

	if (product?.categories?.length > 0) {
		// Here you can use Promise.all for all categories to improve performance

		const categoriesPromises =
			product.categories.map(
				async (category) => {
					const taxonomyObject =
						await getRootCategory(
							category,
							container
						);

					const taxnomyName =
						taxonomyObject?.name;

					const hierarchyPath =
						await findCategoryAndCreateHierarchy(
							category?.id,
							taxonomyObject
						);

					hierarchicalTaxonomies[
						`hierarchical_${taxnomyName}`
					] =
						hierarchicalTaxonomies[
							`hierarchical_${taxnomyName}`
						] || [];
					hierarchicalTaxonomies[
						`hierarchical_${taxnomyName}`
					].push(hierarchyPath);

					productTaxonomies[
						taxnomyName
					] =
						productTaxonomies[
							taxnomyName
						] || [];
					productTaxonomies[
						taxnomyName
					].push(category.name);

					if (
						taxonomyObject?.handle ===
						"section"
					) {
						const possibleMainSections =
							taxonomyObject?.category_children ||
							[];
						for (let mainSectionCategory of possibleMainSections) {
							// For each mainSection category, check if any of the product's categories is its child
							if (
								categoryExistsInHierarchy(
									category.id,
									mainSectionCategory
								)
							) {
								MainSections.push(
									mainSectionCategory.name
								);
								break;
							}
						}
					}
				}
			);
		await Promise.all(
			categoriesPromises
		);
	}
	if (MainSections.length > 0) {
		productTaxonomies["MainSections"] =
			MainSections; // Add main sections to productTaxonomies if not empty
	}

	return [
		productTaxonomies,
		hierarchicalTaxonomies,
	];
}

function getInventoryQuantity(product) {
	let inventoryQuantity = 0;
	if (product.variants) {
		inventoryQuantity =
			product.variants.reduce(
				(acc, variant) =>
					acc +
					variant.inventory_quantity,
				0
			);
	}
	return inventoryQuantity;
}

const addProductCategoriesRelations =
	async (product, container) => {
		const productService =
			container.productService;
		const productWithCategories =
			await productService.retrieve(
				product.id,
				{
					relations: productRelations,
				}
			);
		if (!productWithCategories) {
			throw new Error(
				`Product not found for id: ${product.id}`
			);
		}
		return productWithCategories;
	};

// Main function
export async function algoliaProductTransformerForEuro(
	product,
	container
) {
	container.logger.info(
		`Transforming product ${product.id}`
	);

	const productOptions =
		processProductOptions(product);

	const pricingService =
		container.pricingService;
	const currencyCode = "eur";
	const decoratePromises = [];

	decoratePromises.push(
		pricingService.setProductPrices(
			[product],
			{
				currency_code: currencyCode,
				include_discount_prices: true,
			}
		)
	);

	const pricedProduct =
		await Promise.all(
			decoratePromises
		).then((decoratedProductArray) => {
			return decoratedProductArray?.[0]?.[0];
		});

	const productWithCategories =
		await addProductCategoriesRelations(
			product,
			container
		);

	const [
		productTaxonomies,
		hierarchicalTaxonomies,
	] = await processProductTaxonomies(
		productWithCategories,
		container
	);

	const transformedProduct = {
		...productWithCategories,
		...pricedProduct,
	};

	// More readable field assignments
	transformedProduct.objectID =
		pricedProduct.id;
	transformedProduct.updated_at_timestamp =
		pricedProduct.updated_at
			? new Date(
					pricedProduct.updated_at
			  ).getTime()
			: null;
	transformedProduct.type_value =
		pricedProduct.type?.value;
	transformedProduct.collection_title =
		pricedProduct.collection?.title;
	transformedProduct.collection_handle =
		pricedProduct.collection?.handle;

	transformedProduct.in_stock =
		getInventoryQuantity(
			pricedProduct
		) > 0;

	// Variant related processing
	if (
		pricedProduct?.variants &&
		pricedProduct?.variants?.length > 0
	) {
		const cheapestVariant =
			getCheapestVariant(
				pricedProduct.variants
			);

		transformedProduct.calculated_price =
			cheapestVariant?.calculated_price;
		transformedProduct.original_price =
			cheapestVariant?.original_price;
		transformedProduct.price_type =
			cheapestVariant?.calculated_price_type;
		transformedProduct.is_sale =
			cheapestVariant?.calculated_price_type ===
			"sale";

		if (
			transformedProduct.calculated_price &&
			transformedProduct.original_price
		) {
			transformedProduct.percentage_difference =
				calculatePercentageDifference(
					transformedProduct.calculated_price,
					transformedProduct.original_price
				);
		}
	}

	return {
		...transformedProduct,
		...productOptions,
		...productTaxonomies,
		...hierarchicalTaxonomies,
	};
}
