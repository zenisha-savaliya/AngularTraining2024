let inputBox = document.getElementsByClassName("inputBox")[0];
console.log(inputBox);

function updateInput(value) {
  inputBox.value += value;
}

function clearInput() {
  inputBox.value = "";
}

function deleteLastCharacter() {
  inputBox.value = inputBox.value.slice(0, -1);
}

function calculate() {
  let result = eval(inputBox.value);
  inputBox.value = result;
}
