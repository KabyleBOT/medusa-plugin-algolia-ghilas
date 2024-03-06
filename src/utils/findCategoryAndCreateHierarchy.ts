export async function findCategoryAndCreateHierarchy(
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
