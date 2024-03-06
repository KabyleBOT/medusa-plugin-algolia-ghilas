export const getOptionValue = (
	option,
	variants
) => {
	const { id } = option;
	const values = new Set(
		variants.reduce((acc, variant) => {
			const value =
				variant.options.find(
					(o) => o.option_id === id
				)?.value;
			acc.add(value);
			return acc;
		}, new Set())
	);
	return values.size === 1
		? ([...values][0] as string)
		: ([...values] as string[]);
};
