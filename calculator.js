let num1;
let num2;
let operator;

const operate = function (num1, operator, num2) {
	if (operator == "+") {
		return add(num1, num2);
	} else if (operator === "-") {
		return subtract(num1, num2);
	} else if (operator === "*") {
		return multiply(num1, num2);
	} else if (operator === "/") {
		return divide(num1, num2);
	} else {
		console.log("Something went wrong");
	}
};

let add = (num1, num2) => {
	return num1 + num2;
};

let subtract = (num1, num2) => {
	return num1 - num2;
};

let multiply = (num1, num2) => {
	return num1 * num2;
};

let divide = (num1, num2) => {
	return num1 / num2;
};
console.log(operate(5, "+", 5));
console.log(operate(5, "-", 5));
console.log(operate(5, "*", 5));
console.log(operate(5, "/", 5));

//build your own function to evaluate expressions as part of this calculator project
