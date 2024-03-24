import { categoryExistsInHierarchy } from "./categoryExistsInHierarchy";
import { findCategoryAndCreateHierarchy } from "./findCategoryAndCreateHierarchy";
import { getRootCategory } from "./getRootCategory";

export async function processProductTaxonomies({
	product,
	productCategoryService,
	logger,
}: {
	product: any;
	productCategoryService: any;
	logger: any;
}) {
	const productTaxonomies = {};
	let hierarchicalTaxonomies = {};
	let MainSections = [];

	if (product?.categories?.length > 0) {
		// Here you can use Promise.all for all categories to improve performance

		const categoriesPromises =
			product.categories.map(
				async (category) => {
					const taxonomyObject =
						await getRootCategory({
							category,
							productCategoryService:
								productCategoryService,
							logger: logger,
						});

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
