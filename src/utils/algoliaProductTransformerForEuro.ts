import { addProductCategoriesRelations } from "./addProductCategoriesRelations";
import { calculatePercentageDifference } from "./calculatePercentageDifference";
import { getCheapestVariant } from "./getCheapestVariant";
import { getInventoryQuantity } from "./getInventoryQuantity";
import { getProductMaterialsFromVariants } from "./getProductMaterialsFromVariants";
import { processProductOptions } from "./processProductOptions";
import { processProductTaxonomies } from "./processProductTaxonomies";

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

		transformedProduct.main_materials =
			getProductMaterialsFromVariants(
				pricedProduct.variants
			);
	}

	return {
		...transformedProduct,
		...productOptions,
		...productTaxonomies,
		...hierarchicalTaxonomies,
	};
}
