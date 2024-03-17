let inputBox = document.getElementsByClassName("inputBox")[0];
function addTask() {
  let list = document.getElementsByClassName("taskList")[0];
  let listItem = document.createElement("ul");
  listItem.textContent = inputBox.value;
  list.appendChild(listItem);
  inputBox.value = "";
}
