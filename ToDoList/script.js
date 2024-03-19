let inputBox = document.querySelector(".inputBox");
let taskList = document.querySelector(".taskList");

function addTask() {
  let taskText = inputBox.value.trim();

  if (taskText !== "") {
    let listItem = document.createElement("li");
    listItem.textContent = taskText;

    // adding remove button with javascript

    let removeButton = document.createElement("button");
    removeButton.textContent = "X";
    removeButton.classList.add("removeButton");
    removeButton.onclick = function () {
      listItem.remove();
      alert("item removed");
    };
    listItem.appendChild(removeButton);

    taskList.querySelector("ul").appendChild(listItem);

    inputBox.value = "";
  }
}
