type ColorCategory = {
	name:
		| "Rouge"
		| "Vert"
		| "Bleu"
		| "Noir"
		| "Blanc"
		| "Gris"
		| "Jaune"
		| "Cyan"
		| "Magenta"
		| "Multicolore"
		| "Autre";
	hexCode: string;
};

export function getPrincipalColorCategory(
	red: number,
	green: number,
	blue: number
): ColorCategory {
	if (
		red > 200 &&
		green < 50 &&
		blue < 50
	)
		return {
			name: "Rouge",
			hexCode: "#FF0000",
		};
	if (
		green > 200 &&
		red < 50 &&
		blue < 50
	)
		return {
			name: "Vert",
			hexCode: "#00FF00",
		};
	if (
		blue > 200 &&
		red < 50 &&
		green < 50
	)
		return {
			name: "Bleu",
			hexCode: "#0000FF",
		};
	if (
		red < 30 &&
		green < 30 &&
		blue < 30
	)
		return {
			name: "Noir",
			hexCode: "#000000",
		};
	if (
		red > 220 &&
		green > 220 &&
		blue > 220
	)
		return {
			name: "Blanc",
			hexCode: "#FFFFFF",
		};
	if (
		red > 100 &&
		green > 100 &&
		blue > 100 &&
		red < 200 &&
		green < 200 &&
		blue < 200
	)
		return {
			name: "Gris",
			hexCode: "#808080",
		};
	if (
		red > 200 &&
		green > 200 &&
		blue < 50
	)
		return {
			name: "Jaune",
			hexCode: "#FFFF00",
		};
	if (
		red < 50 &&
		green > 200 &&
		blue > 200
	)
		return {
			name: "Cyan",
			hexCode: "#00FFFF",
		};
	if (
		red > 200 &&
		green < 50 &&
		blue > 200
	)
		return {
			name: "Magenta",
			hexCode: "#FF00FF",
		};

	// Determine if the color is more red, green, or blue
	const maxVal = Math.max(
		red,
		green,
		blue
	);
	if (maxVal === red)
		return {
			name: "Rouge",
			hexCode: "#FF0000",
		};
	if (maxVal === green)
		return {
			name: "Vert",
			hexCode: "#00FF00",
		};
	if (maxVal === blue)
		return {
			name: "Bleu",
			hexCode: "#0000FF",
		};

	return {
		name: "Autre",
		hexCode: "#FFFFFF",
	};
}

export function parseColorOption(
	option: string
): string {
	const [colorName, colorHexCode] =
		option.split(";");

	if (
		!colorHexCode ||
		!/^#[0-9A-F]{6}$/i.test(
			colorHexCode
		)
	) {
		return "Multicolore;#FFFFFF";
	}

	const rgb = parseInt(
		colorHexCode.substring(1),
		16
	);
	const red = (rgb >> 16) & 0xff;
	const green = (rgb >> 8) & 0xff;
	const blue = rgb & 0xff;

	const principalColor =
		getPrincipalColorCategory(
			red,
			green,
			blue
		);
	return `${principalColor.name};${principalColor.hexCode}`;
}
