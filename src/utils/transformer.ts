import { MedusaContainer } from "@medusajs/medusa";
import { algoliaProductTransformerForEuro } from "./algoliaProductTransformerForEuro";

export const transformProduct = async (
	product: any,
	container?: MedusaContainer
) => {
	const transformedProductForEuro =
		await algoliaProductTransformerForEuro(
			product,
			container
		);
	return transformedProductForEuro;
};
