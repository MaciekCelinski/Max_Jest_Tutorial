// exports.generateText = (name, age) => {
const generateText = (name, age) => {
	// Returns output text
	return `${name} (${age} years old)`;
};

exports.createElement = (type, text, className) => {
	// Creates a new HTML element and returns it
	const newElement = document.createElement(type);
	newElement.classList.add(className);
	newElement.textContent = text;
	return newElement;
};

// exports.validateInput = (text, notEmpty, isNumber) => {
const validateInput = (text, notEmpty, isNumber) => {
	// Validate user input with two pre-defined rules
	if (!text) {
		return false;
	}
	if (notEmpty && text.trim().length === 0) {
		return false;
	}
	if (isNumber && +text === NaN) {
		return false;
	}
	return true;
};

exports.checkAndGenerate = (name, age) => {
	// if we exports function than we need to use this.function like this
	// if (
	// 	!this.validateInput(name.value, true, false) ||
	// 	!this.validateInput(age.value, false, true)
	// )

	// if we do not export we can use it normally
	if (
		!validateInput(name, true, false) ||
		!validateInput(age, false, true)
	) {
		return false;
	}

	// return this.generateText(name, age);
	return generateText(name, age);
};

// then we need to export those functions normally
exports.generateText = generateText;
exports.validateInput = validateInput;
