export const parseColorOption = (
	optionValue: string
) => {
	const colorHexCode =
		optionValue.split(";")[1];

	if (
		!colorHexCode ||
		!/^#[0-9A-F]{6}$/i.test(
			colorHexCode
		)
	) {
		return "Multicolore;#FFFFFF";
	}

	const colorToNameConvertor =
		new HexCodeToColorName();
	const [hex, name] =
		colorToNameConvertor.name(
			colorHexCode
		);

	return `${name};${hex}`;
};

/*

+-----------------------------------------------------------------+
|     Inspired by Chirag Mehta - http://chir.ag/projects/ntc       |
|-----------------------------------------------------------------|
|               ntc js (Name that Color JavaScript)               |
+-----------------------------------------------------------------+
*/

class HexCodeToColorName {
	constructor() {
		for (
			var i = 0;
			i < this.names.length;
			i++
		) {
			const color = `#${this.names[i][0]}`;
			const [r, g, b] = this.rgb(color);
			const [h, s, l] = this.hsl(color);
			this.names[i].push(
				r,
				g,
				b,
				h,
				s,
				l
			);
		}
	}

	private names: any[] = [
		//  list of colors of the web for fashion
		["FFFFFF", "Blanc"],
		["C0C0C0", "Argenté"],
		["808080", "Gris"],
		["F5F5DC", "Beige"],
		["000000", "Noir"],
		["FF0000", "Rouge"],
		["800000", "Marron"],
		["FFFF00", "Jaune"],
		["FFA500", "Orange"],
		["FFD700", "Doré"],
		["808000", "Vert Olive"],
		["008000", "Vert"],
		["40E0D0", "Turquoise"],
		["16738f", "Bleu Pétrole"],
		["0000FF", "Bleu"],
		["800080", "Violet"],
		["FFC0CB", "Rose"],
	];

	name(color: string) {
		if (
			color.length < 3 ||
			color.length > 7
		) {
			return [
				"#000000",
				`Invalid Color: ${color}`,
				false,
			];
		}

		color = color.toUpperCase();
		if (color.length % 3 == 0) {
			color = `#${color}`;
		}
		if (color.length == 4) {
			color = `#${color.substr(
				1,
				1
			)}${color.substr(
				1,
				1
			)}${color.substr(
				2,
				1
			)}${color.substr(
				2,
				1
			)}${color.substr(
				3,
				1
			)}${color.substr(3, 1)}`;
		}

		const [r, g, b] = this.rgb(color);
		const [h, s, l] = this.hsl(color);
		let ndf1 = 0;
		let ndf2 = 0;
		let ndf = 0;
		let cl = -1;
		let df = -1;

		for (
			var i = 0;
			i < this.names.length;
			i++
		) {
			if (
				color == `#${this.names[i][0]}`
			) {
				return [
					`#${this.names[i][0]}`,
					this.names[i][1],
					true,
				];
			}

			ndf1 =
				Math.pow(
					r - this.names[i][2],
					2
				) +
				Math.pow(
					g - this.names[i][3],
					2
				) +
				Math.pow(
					b - this.names[i][4],
					2
				);
			ndf2 =
				Math.pow(
					h - this.names[i][5],
					2
				) +
				Math.pow(
					s - this.names[i][6],
					2
				) +
				Math.pow(
					l - this.names[i][7],
					2
				);
			ndf = ndf1 + ndf2 * 2;
			if (df < 0 || df > ndf) {
				df = ndf;
				cl = i;
			}
		}

		return cl < 0
			? [
					"#000000",
					`Invalid Color: ${color}`,
					false,
			  ]
			: [
					`#${this.names[cl][0]}`,
					this.names[cl][1],
					false,
			  ];
	}

	private hsl(color: string) {
		const [r, g, b] = [
			parseInt(
				`0x${color.substring(1, 3)}`
			) / 255,
			parseInt(
				`0x${color.substring(3, 5)}`
			) / 255,
			parseInt(
				`0x${color.substring(5, 7)}`
			) / 255,
		];
		const min = Math.min(
			r,
			Math.min(g, b)
		);
		const max = Math.max(
			r,
			Math.max(g, b)
		);
		const delta = max - min;
		const l = (min + max) / 2;

		let s = 0;
		if (l > 0 && l < 1) {
			s =
				delta /
				(l < 0.5 ? 2 * l : 2 - 2 * l);
		}

		let h = 0;
		if (delta > 0) {
			if (max == r && max != g)
				h += (g - b) / delta;
			if (max == g && max != b)
				h += 2 + (b - r) / delta;
			if (max == b && max != r)
				h += 4 + (r - g) / delta;
			h /= 6;
		}

		return [h * 255, s * 255, l * 255];
	}

	private rgb = (color: string) => [
		parseInt(
			`0x${color.substring(1, 3)}`
		),
		parseInt(
			`0x${color.substring(3, 5)}`
		),
		parseInt(
			`0x${color.substring(5, 7)}`
		),
	];
}
