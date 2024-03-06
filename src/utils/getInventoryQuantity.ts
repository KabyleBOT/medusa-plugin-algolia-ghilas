export function getInventoryQuantity(
	product
) {
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
