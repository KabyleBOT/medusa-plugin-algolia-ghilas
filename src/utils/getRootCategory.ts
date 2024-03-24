export async function getRootCategory({
	category,
	productCategoryService,
	logger,
}: {
	category: any;
	productCategoryService: any;
	logger: any;
}) {
	let currentCategory = category;

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
			logger.error(
				`Parent Category not found for : ${name} with id: ${parentId}`
			);
		}
	}

	return currentCategory;
}
