export const getPricedProduct = async ({
	product,
	currencyCode,
	pricingService,
}: {
	product: any;
	currencyCode: string;
	pricingService: any;
}) => {
	const decoratePromises = [];
	decoratePromises.push(
		pricingService.setProductPrices(
			[product],
			{
				currency_code: currencyCode,
				include_discount_prices: true,
			}
		)
	);

	const pricedProduct =
		await Promise.all(
			decoratePromises
		).then((decoratedProductArray) => {
			return decoratedProductArray?.[0]?.[0];
		});

	return pricedProduct;
};
