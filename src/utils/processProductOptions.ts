import { getOptionValue } from "./getOptionValue";
import { parseColorOption } from "./parseColorOption";

export function processProductOptions(
	product
) {
	const productOptions = {};
	if (
		product.options &&
		product.variants &&
		product.variants.length > 0
	) {
		product.options.forEach(
			(option) => {
				const optionTitle =
					option.title;
				const optionValues =
					getOptionValue(
						option,
						product.variants
					);

				if (optionTitle === "Color") {
					if (
						Array.isArray(optionValues)
					) {
						productOptions[
							optionTitle
						] = optionValues.map(
							(value) =>
								parseColorOption(value)
						);
					} else {
						productOptions[
							optionTitle
						] = parseColorOption(
							optionValues
						);
					}
				} else {
					productOptions[optionTitle] =
						optionValues;
				}
			}
		);
	}
	return productOptions;
}
