import { parseColorOption } from "../parseColorOption";

describe("parseColorOption", () => {
	it("should return the correct color name and hex code for a valid color option", () => {
		const input = "Blanc;#FFFFFF";
		const output =
			parseColorOption(input);
		expect(output).toEqual(
			"Blanc;#FFFFFF"
		);
	});

	it("should return the correct color name and hex code for a valid color option", () => {
		const input = "Beige;#F6E6D1";
		const output =
			parseColorOption(input);
		expect(output).toEqual(
			"Beige;#F6E6D1"
		);
	});

	it("should return the correct color name and hex code for a valid color option", () => {
		const input = "Gris Chiné;#D3E3DE";
		const output =
			parseColorOption(input);
		expect(output).toEqual(
			"Gris Chiné;#D3E3DE"
		);
	});

	it("should return the correct color name and hex code for a valid color option", () => {
		const input = "Gris;#C0C0C0";
		const output =
			parseColorOption(input);
		expect(output).toEqual(
			"Gris;#C0C0C0"
		);
	});

	it("should return the correct color name and hex code for a valid color option", () => {
		const input = "Anthracite;#474747";
		const output =
			parseColorOption(input);
		expect(output).toEqual(
			"Anthracite;#474747"
		);
	});

	it('should return "Multicolore;#FFFFFF" for an invalid color option', () => {
		const input = "Invalid";
		const output =
			parseColorOption(input);
		expect(output).toEqual(
			"Multicolore;#FFFFFF"
		);
	});
});
