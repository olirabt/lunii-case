import isValidUrl from "./isvalidurl";

describe("isValidUrl", () => {
	test("returns true when the url is valid", () => {
		const url = "https://google.com";
		const result = isValidUrl(url);
		expect(result).toBe(true);
	});

	test("returns false when the url is invalid", () => {
		const url = "aninvalidurl";
		const result = isValidUrl(url);
		expect(result).toBe(false);
	});
});
