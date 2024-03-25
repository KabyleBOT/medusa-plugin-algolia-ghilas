import { defaultSearchIndexingProductRelations } from "@medusajs/utils";

export const productRelations = [
	...defaultSearchIndexingProductRelations,
	"categories",
	"custom_attributes",
	"custom_attributes",
	"attribute_values",
	"int_attribute_values",
];
