export function getCheapestVariant(
	variants
) {
	return variants.reduce(
		(acc, curr) =>
			acc.calculated_price >
			curr.calculated_price
				? curr
				: acc,
		variants[0]
	);
}
