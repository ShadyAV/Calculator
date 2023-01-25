let first_number = "0";
let operation = "";
let second_number = "";

const numberButtons = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operatorButton");
const equalBtn = document.getElementById("equalBtn");
const lowerScreen = document.getElementById("lowerBlock");

function calculate() {
    //RegEx to spot operator between numbers
    //const regex_match = lowerScreen.textContent.match(/(?<=[\d+])[\+\-\/\*](?![\+])/);
    let numbers = lowerScreen.textContent.split(/(?<=[\d+])[\+\-\/\*](?![\+])/);
    first_number = Number(numbers[0]);
    //operation = regex_match[0];
    second_number = Number(numbers[1]);
    if (!second_number) {
        second_number = first_number;
        display(second_number);
    }
}

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
        calculate();
        let result = operate(operation, first_number, second_number);
        display(equalBtn.textContent);
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
        operation = element.textContent;
        display(element.textContent);
    })
});

function display(content) {
    if (lowerScreen.textContent === "0" && content !== "+") {
        lowerScreen.textContent = content;
    } else
        lowerScreen.textContent += content;
}