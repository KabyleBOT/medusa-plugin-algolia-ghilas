export function calculatePercentageDifference(
	calculated_price,
	original_price
) {
	if (
		calculated_price === original_price
	) {
		return 0;
	}
	const percentageDifference =
		(calculated_price -
			original_price) /
		original_price;
	return Math.round(
		percentageDifference * 100
	);
}
