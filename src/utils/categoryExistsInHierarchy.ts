export function categoryExistsInHierarchy(
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
