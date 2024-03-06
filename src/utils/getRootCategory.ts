export async function getRootCategory(
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
