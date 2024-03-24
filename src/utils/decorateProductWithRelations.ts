export const decorateProductWithRelations =
	async ({
		product,
		productService,
		productRelations,
	}: {
		product: any;
		productService: any;
		productRelations: any;
	}) => {
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
