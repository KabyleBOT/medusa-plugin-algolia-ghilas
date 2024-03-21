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
		["FFFFFF", "Blanc"],
		["F6E6D1", "Beige"],
		["D3E3DE", "Gris Chiné"],
		["C0C0C0", "Gris"],
		["474747", "Anthracite"],
		["000000", "Noir"],
		["633000", "Marron"],
		["FF0000", "Rouge"],
		["FF8000", "Orange"],
		["FFFF00", "Jaune"],
		["62763A", "Kaki"],
		["00D000", "Vert"],
		["0070FF", "Bleu"],
		["103060", "Bleu Marine"],
		["A000FF", "Violet"],
		["FFA0D0", "Rose"],
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
