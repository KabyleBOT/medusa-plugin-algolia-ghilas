import { algoliaProductTransformerForEuro } from "../algoliaProductTransformerForEuro";

describe("algoliaProductTransformerForEuro", () => {
	const mockProduct = {
		id: "prod_01HS1RTWHNXC992TBMM7W10DG7",
		created_at:
			"2024-03-15T19:18:47.082Z",
		updated_at:
			"2024-03-15T20:13:24.780Z",
		deleted_at: null,
		title:
			"Short plissé en velours côtelé | Bleu",
		subtitle: null,
		description:
			"Ce short girly en velours côtelé bleu de PusBLU est l'incarnation du confort et du style pour les jeunes filles de 5 à 6 ans. Sa texture douce et son éclatante couleur bleue ajoutent une touche ludique et rafraîchissante aux tenues décontractées. Doté d'une taille élastique pour un ajustement sans souci et d'une coupe régulière qui offre une grande liberté de mouvement, ce short est parfait pour s'amuser dehors ou pour une journée d'école. Les finitions côtelées et les poches latérales combinées à des fausses poches arrière contribuent à un look à la fois pratique et stylé, facile à associer avec divers hauts pour une multitude d'occasions estivales.",
		handle:
			"short-plisse-en-velours-cotele-bleu",
		is_giftcard: false,
		status: "published",
		thumbnail:
			"https://backstore-medusa-server.s3.eu-west-3.amazonaws.com/1-1710530508648.png",
		weight: null,
		length: null,
		height: null,
		width: null,
		hs_code: null,
		origin_country: null,
		mid_code: null,
		material:
			"Extérieur : 98% Coton + 2% Élasthanne",
		collection_id: null,
		type_id: null,
		discountable: true,
		external_id: null,
		metadata: {},
		attribute_values: [
			{
				id: "attr_val_01HQTJD8CKXMFGM3XHBTVYZDBZ",
				created_at:
					"2024-02-29T13:56:06.162Z",
				updated_at:
					"2024-02-29T13:56:06.162Z",
				value:
					" Coupe régulière, confortable et intemporelle.",
				attribute_id:
					"attr_01HQTDHSTD8DV18JXW3WZVCEFR",
				metadata: null,
				rank: 0,
				attribute: {
					id: "attr_01HQTDHSTD8DV18JXW3WZVCEFR",
					created_at:
						"2024-02-29T12:31:12.205Z",
					updated_at:
						"2024-02-29T12:31:12.205Z",
					name: "Coupe de la jambe",
					description: "",
					type: "single",
					handle: "coupe-de-la-jambe",
					filterable: false,
					metadata: null,
				},
			},
			{
				id: "attr_val_01HQTCSYA57V7GR65GXZZHEVXB",
				created_at:
					"2024-02-29T12:18:10.373Z",
				updated_at:
					"2024-03-22T22:53:16.871Z",
				value: "Velours Côtelé",
				attribute_id:
					"attr_01HQTA32FQ71HP16EYCGYMM331",
				metadata: null,
				rank: 31,
				attribute: {
					id: "attr_01HQTA32FQ71HP16EYCGYMM331",
					created_at:
						"2024-02-29T11:30:43.830Z",
					updated_at:
						"2024-02-29T11:30:43.830Z",
					name: "Tissus",
					description:
						"Ici nous devons mettre quel type de tissus est utilisé dans l'article",
					type: "multi",
					handle: "tissus",
					filterable: null,
					metadata: null,
				},
			},
			{
				id: "attr_val_01HQTD97VZZ58YECEZHXQAW0QH",
				created_at:
					"2024-02-29T12:26:31.679Z",
				updated_at:
					"2024-02-29T12:26:31.679Z",
				value: "Taille extensible",
				attribute_id:
					"attr_01HQTD97VZ6HTD0M0Y8RE1N8KC",
				metadata: null,
				rank: 1,
				attribute: {
					id: "attr_01HQTD97VZ6HTD0M0Y8RE1N8KC",
					created_at:
						"2024-02-29T12:26:31.679Z",
					updated_at:
						"2024-02-29T12:26:31.679Z",
					name: "Type de ceinture",
					description: "",
					type: "single",
					handle: "ceinture",
					filterable: false,
					metadata: null,
				},
			},
			{
				id: "attr_val_01HQ1M7WCJ47X9WVRA4GPGJN3P",
				created_at:
					"2024-02-19T21:27:06.385Z",
				updated_at:
					"2024-02-19T21:27:06.385Z",
				value: "Très court",
				attribute_id:
					"attr_01HQ1M7WCH04BFZAK01YQYY7M3",
				metadata: null,
				rank: 1,
				attribute: {
					id: "attr_01HQ1M7WCH04BFZAK01YQYY7M3",
					created_at:
						"2024-02-19T21:27:06.385Z",
					updated_at:
						"2024-02-19T21:27:06.385Z",
					name: "Longueur",
					description: "",
					type: "single",
					handle: "longueur",
					filterable: false,
					metadata: null,
				},
			},
			{
				id: "attr_val_01HQTEEX3KXQGR6PSW7QHP2WDT",
				created_at:
					"2024-02-29T12:47:05.842Z",
				updated_at:
					"2024-03-21T08:03:54.977Z",
				value:
					"Bordures côtelées aux extrémités",
				attribute_id:
					"attr_01HQTEEX3KNJXJVSDXZ88S38GN",
				metadata: null,
				rank: 1,
				attribute: {
					id: "attr_01HQTEEX3KNJXJVSDXZ88S38GN",
					created_at:
						"2024-02-29T12:47:05.842Z",
					updated_at:
						"2024-02-29T12:47:05.842Z",
					name: "Détails",
					description: "",
					type: "multi",
					handle: "details",
					filterable: null,
					metadata: null,
				},
			},
			{
				id: "attr_val_01HQTDYWPDCBG00S5H21R3B6S8",
				created_at:
					"2024-02-29T12:38:21.133Z",
				updated_at:
					"2024-02-29T12:38:21.133Z",
				value:
					"Poches passepoilées latérales",
				attribute_id:
					"attr_01HQTDYWPDT13SJXH2CHGD80RY",
				metadata: null,
				rank: 0,
				attribute: {
					id: "attr_01HQTDYWPDT13SJXH2CHGD80RY",
					created_at:
						"2024-02-29T12:38:21.133Z",
					updated_at:
						"2024-02-29T12:38:21.133Z",
					name: "Poche",
					description: "",
					type: "multi",
					handle: "poche",
					filterable: false,
					metadata: null,
				},
			},
			{
				id: "attr_val_01HQTERAJX2MT0CXQAERJFC5K7",
				created_at:
					"2024-02-29T12:52:14.556Z",
				updated_at:
					"2024-02-29T12:52:14.556Z",
				value:
					"Fausses poches à l'arrière",
				attribute_id:
					"attr_01HQTDYWPDT13SJXH2CHGD80RY",
				metadata: null,
				rank: 3,
				attribute: {
					id: "attr_01HQTDYWPDT13SJXH2CHGD80RY",
					created_at:
						"2024-02-29T12:38:21.133Z",
					updated_at:
						"2024-02-29T12:38:21.133Z",
					name: "Poche",
					description: "",
					type: "multi",
					handle: "poche",
					filterable: false,
					metadata: null,
				},
			},
			{
				id: "attr_val_01HQ1JKDM9QKWAM3SP17S0MVXH",
				created_at:
					"2024-02-19T20:58:27.337Z",
				updated_at:
					"2024-02-19T20:58:27.337Z",
				value: "Unicolore",
				attribute_id:
					"attr_01HQ1JKDM9V66T33NACSFXE2AS",
				metadata: null,
				rank: 0,
				attribute: {
					id: "attr_01HQ1JKDM9V66T33NACSFXE2AS",
					created_at:
						"2024-02-19T20:58:27.337Z",
					updated_at:
						"2024-02-19T20:58:27.337Z",
					name: "Motif",
					description: "",
					type: "multi",
					handle: "motif",
					filterable: false,
					metadata: null,
				},
			},
		],
		categories: [
			{
				id: "pcat_01HQ16SVX4CB1P8E3ZG1D1VMMV",
				created_at:
					"2024-02-19T17:32:15.647Z",
				updated_at:
					"2024-02-19T17:33:10.928Z",
				name: "Shorts ",
				description: "",
				handle:
					"enfant/fille/vetements/bas/shorts",
				is_active: true,
				is_internal: false,
				parent_category_id:
					"pcat_01HQ167R0E8DHNHA779N4JA3S8",
				rank: 2,
				metadata: {},
			},
			{
				id: "pcat_01HRY2HZNJ8QETJGWFBX6DB1HK",
				created_at:
					"2024-03-14T08:51:43.403Z",
				updated_at:
					"2024-03-22T21:17:40.982Z",
				name: "PUSBLU",
				description: "",
				handle: "pusblu",
				is_active: true,
				is_internal: false,
				parent_category_id:
					"pcat_01HCFRXWRAEQC70S6KYMTS9458",
				rank: 42,
				metadata: {},
			},
		],
		collection: null,
		images: [
			{
				id: "img_01HS1S0EBYXCER0Q1XJP18TMJA",
				created_at:
					"2024-03-15T19:21:49.174Z",
				updated_at:
					"2024-03-15T19:21:49.174Z",
				deleted_at: null,
				url: "https://backstore-medusa-server.s3.eu-west-3.amazonaws.com/1-1710530508648.png",
				metadata: null,
			},
			{
				id: "img_01HS1S0EBYV6AN5GXQZ2BP0NE4",
				created_at:
					"2024-03-15T19:21:49.174Z",
				updated_at:
					"2024-03-15T19:21:49.174Z",
				deleted_at: null,
				url: "https://backstore-medusa-server.s3.eu-west-3.amazonaws.com/2-1710530508649.png",
				metadata: null,
			},
			{
				id: "img_01HS1S0EBY4MMYS6MJTVG1WGHW",
				created_at:
					"2024-03-15T19:21:49.174Z",
				updated_at:
					"2024-03-15T19:21:49.174Z",
				deleted_at: null,
				url: "https://backstore-medusa-server.s3.eu-west-3.amazonaws.com/3-1710530508649.png",
				metadata: null,
			},
		],
		int_attribute_values: [],
		options: [
			{
				id: "opt_01HS1RTWJ1SPNE01T9CBGEZSV7",
				created_at:
					"2024-03-15T19:18:47.082Z",
				updated_at:
					"2024-03-15T19:18:47.082Z",
				deleted_at: null,
				title: "Color",
				product_id:
					"prod_01HS1RTWHNXC992TBMM7W10DG7",
				metadata: null,
			},
			{
				id: "opt_01HS1RTWJ1GCAEETT3BQRHQK77",
				created_at:
					"2024-03-15T19:18:47.082Z",
				updated_at:
					"2024-03-15T19:18:47.082Z",
				deleted_at: null,
				title: "Size",
				product_id:
					"prod_01HS1RTWHNXC992TBMM7W10DG7",
				metadata: null,
			},
			{
				id: "opt_01HS1RTWJ1H54Z7YKWPZM7YV89",
				created_at:
					"2024-03-15T19:18:47.082Z",
				updated_at:
					"2024-03-15T19:18:47.082Z",
				deleted_at: null,
				title: "Condition",
				product_id:
					"prod_01HS1RTWHNXC992TBMM7W10DG7",
				metadata: null,
			},
		],
		profiles: [
			{
				id: "sp_01HCF0Z6B402HG8GJRAZW283XD",
				created_at:
					"2023-10-11T09:27:00.646Z",
				updated_at:
					"2023-10-11T09:27:00.646Z",
				deleted_at: null,
				name: "Default Shipping Profile",
				type: "default",
				metadata: null,
			},
		],
		profile: {
			id: "sp_01HCF0Z6B402HG8GJRAZW283XD",
			created_at:
				"2023-10-11T09:27:00.646Z",
			updated_at:
				"2023-10-11T09:27:00.646Z",
			deleted_at: null,
			name: "Default Shipping Profile",
			type: "default",
			metadata: null,
		},
		profile_id:
			"sp_01HCF0Z6B402HG8GJRAZW283XD",
		sales_channels: [
			{
				id: "sc_01HCF0Z6BXC6DAFCYEZXXYG9K8",
				created_at:
					"2023-10-11T09:27:00.646Z",
				updated_at:
					"2023-10-11T16:40:07.029Z",
				deleted_at: null,
				name: "Website",
				description:
					"Products to be available in the website",
				is_disabled: false,
				metadata: null,
			},
		],
		tags: [
			{
				id: "ptag_01HR7975749XH82YK7SBV1VTVM",
				created_at:
					"2024-03-05T12:25:36.727Z",
				updated_at:
					"2024-03-05T12:25:36.727Z",
				deleted_at: null,
				value: "Confortable",
				metadata: null,
			},
			{
				id: "ptag_01HR797574EGT0P176XVF3GV1Q",
				created_at:
					"2024-03-05T12:25:36.727Z",
				updated_at:
					"2024-03-05T12:25:36.727Z",
				deleted_at: null,
				value: "Chic et décontracté",
				metadata: null,
			},
			{
				id: "ptag_01HR7975745YBXFHZMPG66KYSK",
				created_at:
					"2024-03-05T12:25:36.727Z",
				updated_at:
					"2024-03-05T12:25:36.727Z",
				deleted_at: null,
				value: "Robuste et durable",
				metadata: null,
			},
			{
				id: "ptag_01HS1RZX6APFA6074EXN2WH5PD",
				created_at:
					"2024-03-15T19:21:31.583Z",
				updated_at:
					"2024-03-15T19:21:31.583Z",
				deleted_at: null,
				value:
					"Short en velours côtelé ",
				metadata: null,
			},
			{
				id: "ptag_01HS1RZX6APPC5ZMZR3915SERY",
				created_at:
					"2024-03-15T19:21:31.583Z",
				updated_at:
					"2024-03-15T19:21:31.583Z",
				deleted_at: null,
				value: "Bleu",
				metadata: null,
			},
			{
				id: "ptag_01HS1RZX6A4C8FAHE9X1K37283",
				created_at:
					"2024-03-15T19:21:31.583Z",
				updated_at:
					"2024-03-15T19:21:31.583Z",
				deleted_at: null,
				value: "PusBlu",
				metadata: null,
			},
		],
		type: null,
		variants: [
			{
				id: "variant_01HS1RTWJG7PMRCC5Y1XHT9ZGH",
				created_at:
					"2024-03-15T19:18:47.082Z",
				updated_at:
					"2024-03-15T19:27:32.066Z",
				deleted_at: null,
				title:
					"Short plissé en velours côtelé / Bleu Turquoise / 5-6 ans | 110-116",
				product_id:
					"prod_01HS1RTWHNXC992TBMM7W10DG7",
				sku: "KG-PU-3-000068",
				barcode: null,
				ean: null,
				upc: null,
				variant_rank: 0,
				inventory_quantity: 1,
				allow_backorder: false,
				manage_inventory: true,
				hs_code: null,
				origin_country: null,
				mid_code: null,
				material: "Coton",
				weight: null,
				length: null,
				height: null,
				width: null,
				metadata: {},
				options: [
					{
						id: "optval_01HS1RTWJH5ABY02GRSQ3YK8R1",
						created_at:
							"2024-03-15T19:18:47.082Z",
						updated_at:
							"2024-03-15T19:27:32.066Z",
						deleted_at: null,
						value:
							"Bleu Turquoise;#0070FF",
						option_id:
							"opt_01HS1RTWJ1SPNE01T9CBGEZSV7",
						variant_id:
							"variant_01HS1RTWJG7PMRCC5Y1XHT9ZGH",
						metadata: null,
					},
					{
						id: "optval_01HS1RTWJHAZJXYA33H93735F2",
						created_at:
							"2024-03-15T19:18:47.082Z",
						updated_at:
							"2024-03-15T19:27:08.868Z",
						deleted_at: null,
						value: "5-6 ans | 110-116",
						option_id:
							"opt_01HS1RTWJ1GCAEETT3BQRHQK77",
						variant_id:
							"variant_01HS1RTWJG7PMRCC5Y1XHT9ZGH",
						metadata: null,
					},
					{
						id: "optval_01HS1RTWJH28FNWZ8KKB0Y2XA0",
						created_at:
							"2024-03-15T19:18:47.082Z",
						updated_at:
							"2024-03-15T19:27:08.868Z",
						deleted_at: null,
						value: "3",
						option_id:
							"opt_01HS1RTWJ1H54Z7YKWPZM7YV89",
						variant_id:
							"variant_01HS1RTWJG7PMRCC5Y1XHT9ZGH",
						metadata: null,
					},
				],
				prices: [
					{
						id: "ma_01HS1RTWJVSKK9PF0AY6ZJ0FE3",
						created_at:
							"2024-03-15T19:18:47.082Z",
						updated_at:
							"2024-03-15T19:25:07.607Z",
						deleted_at: null,
						currency_code: "eur",
						amount: 499,
						min_quantity: null,
						max_quantity: null,
						price_list_id: null,
						region_id: null,
						price_list: null,
						variant_id:
							"variant_01HS1RTWJG7PMRCC5Y1XHT9ZGH",
					},
				],
				original_price: null,
				calculated_price: null,
				original_price_incl_tax: null,
				calculated_price_incl_tax: null,
				original_tax: null,
				calculated_tax: null,
				tax_rates: null,
			},
		],
	};

	const mockContainer = {
		logger: { info: jest.fn() },
		pricingService: {
			setProductPrices: jest.fn(),
		},
		productService: {
			retrieve: jest.fn(),
		},
		productCategoryService: {
			retrieve: jest.fn(),
		},
	};

	it("should transform product correctly for valid product and container", async () => {
		mockContainer.pricingService.setProductPrices.mockResolvedValue(
			[mockProduct]
		);
		mockContainer.productService.retrieve.mockResolvedValue(
			[mockProduct]
		);
		mockContainer.productCategoryService.retrieve.mockResolvedValue(
			[mockProduct.categories[0]]
		);
		mockContainer.logger.info.mockImplementation(
			(message) => {
				console.log(message);
			}
		);

		const result =
			await algoliaProductTransformerForEuro(
				mockProduct,
				mockContainer
			);

		expect(result.objectID).toEqual(
			mockProduct.id
		);
		expect(result.Color).toEqual(
			"Bleu;#0070FF"
		);
	});

	it("should throw error for invalid product", async () => {
		await expect(
			algoliaProductTransformerForEuro(
				null,
				mockContainer
			)
		).rejects.toThrow();
	});

	it("should throw error for invalid container", async () => {
		await expect(
			algoliaProductTransformerForEuro(
				mockProduct,
				null
			)
		).rejects.toThrow();
	});
});
