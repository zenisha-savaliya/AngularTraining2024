let inputBox = document.querySelector(".inputBox");
let taskList = document.querySelector(".taskList");

function addTask() {
  let taskText = inputBox.value.trim();

  if (taskText !== "") {
    let listItem = document.createElement("li");
    listItem.textContent = taskText;
    listItem.style.listStyleType = "circle";

    let removeButton = document.createElement("button");
    removeButton.textContent = "X";
    removeButton.style.fontWeight = "bold";
    removeButton.style.fontSize = "16px";
    removeButton.style.cursor = "pointer";
    removeButton.style.backgroundColor = "orange";
    removeButton.style.padding = "5px 10px";
    removeButton.style.border = "2px solid black";
    removeButton.style.borderRadius = "50%";
    removeButton.onclick = function () {
      listItem.remove();
    };
    listItem.appendChild(removeButton);

    taskList.querySelector("ul").appendChild(listItem);

    inputBox.value = "";
  }
}
