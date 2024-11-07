let display = document.getElementById("display");
let currentOperand = "";
let previousOperand = "";
let operation = undefined;

function appendNumber(number) {
  if (number === "." && currentOperand.includes(".")) return;
  currentOperand = currentOperand.toString() + number.toString();
  updateDisplay();
}

function updateDisplay() {
  display.innerText = currentOperand;
}

function chooseOperation(op) {
  if (currentOperand === "") return;
  if (previousOperand !== "") {
    compute();
  }
  operation = op;
  previousOperand = currentOperand;
  currentOperand = "";
}

function compute() {
  let result;
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(curr)) return;

  switch (operation) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      result = prev / curr;
      break;
    default:
      return;
  }
  currentOperand = result;
  operation = undefined;
  previousOperand = "";
  updateDisplay();
}

function clear() {
  currentOperand = "";
  previousOperand = "";
  operation = undefined;
  updateDisplay();
}
clear(); // Clear display when initialized

const themeToggleButton = document.getElementById("theme-toggle");

themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});
