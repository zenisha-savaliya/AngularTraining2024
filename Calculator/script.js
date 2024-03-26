let inputBox = document.querySelector(".inputBox");
console.log(inputBox);
const operators = ["+", "-", "*", "/", "%"];

//function to update input value

function updateInput(value) {
  const lastChar = inputBox.value.slice(-1);
  const isOperator = operators.includes(lastChar);
  const isConsecutiveDot = value === "." && lastChar === ".";

  if (inputBox.value === "" && operators.includes(value)) {
    return;
  }
  if (isConsecutiveDot) {
    return;
  }

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
    let expression = inputBox.value;
    let result = math.evaluate(expression);
    inputBox.value = parseFloat(result.toFixed(7));
  } catch (error) {
    inputBox.value = "Error ";
  }
}

//function to calculate square of a number

function calculateSquare() {
  let value = parseInt(inputBox.value);
  inputBox.value = value * value;
}
