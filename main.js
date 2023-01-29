let first_number = "0";
let operation = "";
let second_number = "";
let shouldClearScreen = false;
let shouldCalculate = false;

const numberButtons = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operatorButton");
const equalBtn = document.getElementById("equalBtn");
const lowerScreen = document.getElementById("lowerBlock");
const upperScreen = document.getElementById("upperBlock");
const clearBtn = document.getElementById("clearAll");
const deleteBtn = document.getElementById("delete");

clearBtn.addEventListener("click", clearAll);
deleteBtn.addEventListener("click", del);

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
        operation = "";
    }
});

numberButtons.forEach(element => {
    element.addEventListener("click", () => {
        if (second_number) {
            clearAll();
        }
        display(element.textContent);
        if (operation) {
            shouldCalculate = true;
        }
    })
});

operatorButtons.forEach(element => {
    element.addEventListener("click", () => {
        if (lowerScreen.textContent[lowerScreen.textContent.length - 1] === ".") {
            lowerScreen.textContent = lowerScreen.textContent.slice(0, -1);
        }
        if (shouldCalculate === true) {
            if (operation) {
                second_number = Number(lowerScreen.textContent);
                displayUpper(second_number);
                let result = operate(operation, first_number, second_number);
                displayUpper(equalBtn.textContent);
                shouldClearScreen = true;
                display(result);
                operation = "";
            }
            shouldCalculate = false;
        }
        if (second_number) {
            upperScreen.textContent = "";
            second_number = "";
        }
        if (!operation) {
            first_number = Number(lowerScreen.textContent);
            operation = element.textContent;
            displayUpper(first_number);
            displayUpper(element.textContent);
        } else {
            operation = element.textContent;
            upperScreen.textContent = upperScreen.textContent.slice(0, -1);
            displayUpper(element.textContent);
        }
        if (first_number != "0") {
            shouldClearScreen = true;
        }
    })
});

function display(content) {
    if (lowerScreen.textContent.search(/[.]/) !== -1 && content === ".") {
        return 0;
    }
    if (lowerScreen.textContent === "0" && content !== "+" && content !== ".") {
        lowerScreen.textContent = content;
    } else if (shouldClearScreen === true) {
        lowerScreen.textContent = content;
        shouldClearScreen = false;
    } else
        lowerScreen.textContent += content;
}

function displayUpper(content) {
    upperScreen.textContent += content;
}

function clearAll() {
    first_number = "0";
    operation = "";
    second_number = "";
    shouldClearScreen = false;
    upperScreen.textContent = "";
    lowerScreen.textContent = first_number;
}

function del() {
    if (second_number) {
        upperScreen.textContent = "";
    }
    else if (lowerScreen.textContent !== "0") {
        lowerScreen.textContent = lowerScreen.textContent.slice(0, -1);
    }
    if (!lowerScreen.textContent) {
        lowerScreen.textContent = 0;
    }
}