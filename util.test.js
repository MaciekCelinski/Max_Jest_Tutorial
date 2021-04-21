const { generateText, checkAndGenerate } = require("./util");
// for end to end tests
const puppeteer = require("puppeteer");

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

// integration test

test("should generate a valid text output", () => {
	const text = checkAndGenerate("Max", 29);
	expect(text).toBe("Max (29 years old)");
});

// end to end test - user intergration test
test("should create an element with text and correct class", async () => {
	// launch modyfied chrome browser
	const browser = await puppeteer.launch({
		headless: false,
		slowMo: 99,
		args: ["--window-size=1000,1000"],
	});
	const page = await browser.newPage();
	await page.goto(
		"http://127.0.0.1:5500/Max/js-testing-introduction/index.html"
	);
	await page.click("input#name");
	await page.type("input#name", "Anna");
	await page.click("input#age");
	await page.type("input#age", "28");
	await page.click("#btnAddUser");
	const finalText = await page.$eval(".user-item", (el) => el.textContent);
	expect(finalText).toBe("Anna (28 years old)");
}, 10000);
