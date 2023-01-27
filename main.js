let first_number = "0";
let operation = "";
let second_number = "";
let shouldClearScreen = false;

const numberButtons = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operatorButton");
const equalBtn = document.getElementById("equalBtn");
const lowerScreen = document.getElementById("lowerBlock");
const upperScreen = document.getElementById("upperBlock");

function add(number_one, number_two) {
    return number_one + number_two;
}

function subtract(number_one, number_two) {
    return number_one - number_two;
}

function divide(number_one, number_two) {
    return number_one / number_two;
}

function multiply(number_one, number_two) {
    return number_one * number_two;
}

function operate(operator, number_one, number_two) {
    switch (operator) {
        case "+":
            return add(number_one, number_two);
        case "-":
            return subtract(number_one, number_two);
        case "*":
            return multiply(number_one, number_two);
        case "/":
            return divide(number_one, number_two);
    }
}

equalBtn.addEventListener("click", () => {
    if (operation) {
        second_number = Number(lowerScreen.textContent);
        displayUpper(second_number);
        let result = operate(operation, first_number, second_number);
        displayUpper(equalBtn.textContent);
        shouldClearScreen = true;
        display(result);
    }
});

numberButtons.forEach(element => {
    element.addEventListener("click", () => {
        display(element.textContent);
    })
});

operatorButtons.forEach(element => {
    element.addEventListener("click", () => {
        first_number = Number(lowerScreen.textContent);
        operation = element.textContent;
        displayUpper(first_number);
        displayUpper(element.textContent);
        shouldClearScreen = true;
    })
});

function display(content) {
    if (lowerScreen.textContent === "0" && content !== "+") {
        lowerScreen.textContent = content;
    } else if (shouldClearScreen === true) {
        console.log(content);
        lowerScreen.textContent = content;
        shouldClearScreen = false;
    } else
        lowerScreen.textContent += content;
}

function displayUpper(content) {
    upperScreen.textContent += content;
}