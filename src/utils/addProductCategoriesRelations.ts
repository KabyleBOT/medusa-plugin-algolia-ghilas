import { defaultSearchIndexingProductRelations } from "@medusajs/utils";
const productRelations = [
	...defaultSearchIndexingProductRelations,
	"categories",
];
export const addProductCategoriesRelations =
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
