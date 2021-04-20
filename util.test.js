const { generateText, checkAndGenerate } = require("./util");

test("Check text generation", () => {
	// short version
	// expect(generateText('Maciek',36).toBe('Maciek (36 years old)'))
	// long version
	const text = generateText("Maciek", 36);
	expect(text).toBe("Maciek (36 years old)");
	const text2 = generateText("Maciek Celiński", 35);
	expect(text2).toBe("Maciek Celiński (35 years old)");
});

test("Null case", () => {
	const text = generateText("", null);
	expect(text).toBe(" (null years old)");

    const text2 = generateText();
	expect(text2).toBe("undefined (undefined years old)");
});


test('should generate a valid text output', () => {
    const text = checkAndGenerate('Max', 29)
    expect(text).toBe('Max (29 years old)')
})