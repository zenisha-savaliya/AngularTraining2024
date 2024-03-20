let inputBox = document.getElementsByClassName("inputBox")[0];
let isCalculationCompleted = false;
const operators = ["+", "-", "*", "/", "%"];

//function to update input value

function updateInput(value) {
  if (isCalculationCompleted) {
    inputBox.value = "";
    isCalculationCompleted = false;
  }
  const lastChar = inputBox.value.slice(-1);

  const isOperator = operators.includes(lastChar);

  if (isOperator && operators.includes(value)) {
    inputBox.value = inputBox.value.slice(0, -1) + value;
  } else {
    inputBox.value += value;
  }
}

//function to clear input value

function clearInput() {
  inputBox.value = "";
}

//function to delete last character from an input

function deleteLastCharacter() {
  inputBox.value = inputBox.value.slice(0, -1);
}

//function to calculate result

function calculate() {
  try {
    let result = eval(inputBox.value);
    if (isNaN(result)) {
      inputBox.value = "";
      throw new Error("Invalid expression");
    }
    inputBox.value = result;
    isCalculationCompleted = true;
  } catch (error) {
    alert(error.message);
    inputBox.value = "";
  }
}

//function to calculate square of a number

function calculateSquare() {
  let value = parseInt(inputBox.value);
  inputBox.value = value * value;
  isCalculationCompleted = true;
}
