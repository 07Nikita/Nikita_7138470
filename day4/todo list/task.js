function addTask() {

  var input = document.getElementById("taskInput");
  var list = document.getElementById("taskList");

  var taskText = input.value;
  taskText = taskText.trim();

  if (taskText == "") {
    return;
  }

  var li = document.createElement("li");

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  var span = document.createElement("span");
  span.innerText = taskText;

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      span.className = "completed";
    } else {
      span.className = "";
    }
  });

  li.appendChild(checkbox);
  li.appendChild(span);

  list.appendChild(li);

  input.value = "";
}