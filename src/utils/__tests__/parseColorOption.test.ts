// Import the function you want to test
import { parseColorOption } from "../parseColorOption";

describe("parseColorOption", () => {
	test("should correctly parse and categorize a basic color", () => {
		expect(
			parseColorOption("Red;#FF0000")
		).toEqual("Rouge;#FF0000");
	});

	test("should categorize a dark green color as green", () => {
		expect(
			parseColorOption(
				"Dark Green;#006400"
			)
		).toEqual("Vert;#00FF00");
	});

	test("should categorize an army green color as green", () => {
		expect(
			parseColorOption(
				"Army Green;#454B1B"
			)
		).toEqual("Vert;#00FF00");
	});

	test("should categorize a dark blue color as blue", () => {
		expect(
			parseColorOption(
				"Dark Blue;#00008B"
			)
		).toEqual("Bleu;#0000FF");
	});

	test("should categorize navy blue as blue", () => {
		expect(
			parseColorOption(
				"Navy Blue;#000080"
			)
		).toEqual("Bleu;#0000FF");
	});

	test("should return Multicolore for missing hex code", () => {
		expect(
			parseColorOption("Any Color;")
		).toEqual("Multicolore;#FFFFFF");
	});

	// Add more tests as needed
});
