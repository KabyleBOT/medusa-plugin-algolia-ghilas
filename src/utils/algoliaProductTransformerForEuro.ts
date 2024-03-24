import { defaultSearchIndexingProductRelations } from "@medusajs/utils";
import { productAdapterWithEuro } from "./productAdapterWithEuro";

const productRelations = [
	...defaultSearchIndexingProductRelations,
	"categories",
];

// Main function
export async function algoliaProductTransformerForEuro(
	product,
	container
) {
	const logger = container.logger;
	const pricingService =
		container.pricingService;
	const productCategoryService =
		container.productCategoryService;
	const productService =
		container.productService;
	const currencyCode = "eur";

	logger.info(
		`Transforming product ${product.id}`
	);

	return await productAdapterWithEuro({
		product,
		logger,
		pricingService,
		productCategoryService,
		productService,
		currencyCode,
		productRelations,
	});
}
