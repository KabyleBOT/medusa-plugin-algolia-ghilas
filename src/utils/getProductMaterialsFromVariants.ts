export function getProductMaterialsFromVariants(
	variants
) {
	const materialSet = new Set();
	variants.forEach((variant) => {
		let material: string =
			variant?.material;
		// make sur the first letter is uppercase
		material =
			material
				?.charAt(0)
				.toUpperCase() +
			material?.slice(1);
		materialSet.add(material);
	});
	return [...materialSet];
}
