let inputBox = document.getElementsByClassName("inputBox")[0];
let isCalculationCompleted = false;

function updateInput(value) {
  if (isCalculationCompleted) {
    inputBox.value = "";
    isCalculationCompleted = false;
  }
  const lastChar = inputBox.value.slice(-1);

  const isOperator = ["+", "-", "*", "/", "%"].includes(lastChar);

  if (isOperator && ["+", "-", "*", "/", "%"].includes(value)) {
    inputBox.value = inputBox.value.slice(0, -1) + value;
  } else {
    inputBox.value += value;
  }
}

function clearInput() {
  inputBox.value = "";
}

function deleteLastCharacter() {
  inputBox.value = inputBox.value.slice(0, -1);
}

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

function calculateSquare() {
  let value = parseInt(inputBox.value);
  inputBox.value = value * value;
  isCalculationCompleted = true;
}
