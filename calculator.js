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

//build your own function to evaluate expressions as part of this calculator project
let test = 0;
const container = document.querySelector("#container");
let arr = [];
let inputTest = (input) => {
	arr.push(input);
	for (let i = 0; i < arr.length; i++) {
		arr.join("^");
		content.textContent = `${arr.join("")}`;
	}
	console.log(arr);
};

let displayValue = [];
console.log(test);
const seven = document.querySelector(".seven");
seven.addEventListener("click", (e) => {
	console.log("Seven was pressed!");
	displayValue.push(7);
	console.log(displayValue);
});
const content = document.createElement("div");
content.classList.add("content");
content.textContent = 0;

container.appendChild(content);
