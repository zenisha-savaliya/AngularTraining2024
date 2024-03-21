let inputBox = document.getElementsByClassName("inputBox")[0];
let isCalculationCompleted = false;
const operators = ["+", "-", "*", "/", "%"];

//function to update input value

function updateInput(value) {
  if (isCalculationCompleted) {
    clearInput();
    isCalculationCompleted = false;
  }
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

    if (expression.includes("%")) {
      let parts = expression.split("%");
      if (!isNaN(parts[0])) {
        let percentage = parseFloat(parts[0]) / 100;
        expression = percentage.toString() + "*" + parts[1];
      } else {
        throw new Error("Invalid expression: Invalid percentage format.");
      }
    }

    let result = math.evaluate(expression);

    if (!isFinite(result)) {
      throw new Error("Invalid expression: Result is not a valid number.");
    }
    inputBox.value = parseFloat(result.toFixed(7));
    isCalculationCompleted = true;
  } catch (error) {
    console.log("in catch block");
    inputBox.value = "Error ";
    clearInput();
  }
}

//function to calculate square of a number

function calculateSquare() {
  let value = parseInt(inputBox.value);
  inputBox.value = value * value;
  isCalculationCompleted = true;
}
