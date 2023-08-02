const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const divideButton = document.getElementById("divide");
const multiplyButton = document.getElementById("multiply");
const equalButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");
const calculationDisplay = document.getElementById("calculation");
const resultDisplay = document.getElementById("result");

let displayValue = "";
let firstNumber = "";
let operator = "";
let secondNumber = "";
let result = "";

const updateDisplay = (value) => {
	displayValue += value;
	resultDisplay.textContent = displayValue;
};

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => {
	button.addEventListener("click", () => {
		updateDisplay(button.textContent);
	});
});

function add(a, b) {
	return a + b;
}
function subtract(a, b) {
	return a - b;
}
function multiply(a, b) {
	return a * b;
}
function divide(a, b) {
	return a / b;
}

function operate(operator, a, b) {
	switch (operator) {
		case "+":
			return add(a, b);
		case "-":
			return subtract(a, b);
		case "*":
			return multiply(a, b);
		case "/":
			return divide(a, b);
		default:
			return;
	}
}

addButton.addEventListener("click", () => {
	if (result !== "") {
		result = operate(operator, result, Number(displayValue));
	} else {
		result = Number(displayValue);
	}
	operator = "+";
	calculationDisplay.textContent = `${result} ${operator}`;
	displayValue = "";
	resultDisplay.textContent = displayValue;
});

subtractButton.addEventListener("click", () => {
	if (result !== "") {
		result = operate(operator, result, Number(displayValue));
	} else {
		result = Number(displayValue);
	}
	operator = "-";
	calculationDisplay.textContent = `${firstNumber} ${operator}`;
	displayValue = "";
	resultDisplay.textContent = displayValue;
});

multiplyButton.addEventListener("click", () => {
	if (result !== "") {
		result = operate(operator, result, Number(displayValue));
	} else {
		result = Number(displayValue);
	}
	operator = "*";
	calculationDisplay.textContent = `${firstNumber} ${operator}`;
	displayValue = "";
	resultDisplay.textContent = displayValue;
});

divideButton.addEventListener("click", () => {
	if (result !== "") {
		result = operate(operator, result, Number(displayValue));
	} else {
		result = Number(displayValue);
	}
	operator = "/";
	calculationDisplay.textContent = `${firstNumber} ${operator}`;
	displayValue = "";
	resultDisplay.textContent = displayValue;
});

equalButton.addEventListener("click", () => {
	result = operate(operator, result, Number(displayValue));
	result = Math.round(result * 100) / 100;
	displayValue = result.toString();
	resultDisplay.textContent = displayValue;
});

clearButton.addEventListener("click", () => {
	displayValue = "";
	firstNumber = "";
	operator = "";
	secondNumber = "";
	resultDisplay.textContent = displayValue;
});

const decimalButton = document.getElementById("decimal");
decimalButton.addEventListener("click", () => {
	if (!displayValue.includes(".")) {
		updateDisplay(".");
	}
});
