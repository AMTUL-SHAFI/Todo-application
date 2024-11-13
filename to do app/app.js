
var todoList = document.getElementById("todoList");

function addTodo() {
 var todoInput = document.getElementById("todoInput");
  var task = todoInput.value.trim();
  if (task === "") return; // Check if the input is empty
  
var li = document.createElement("li");
  li.className = "todo-item";
  li.innerHTML = `
    <span onclick="toggleComplete(this)">${task}</span>
    <button onclick="removeTodo(this)">delete</button>
  `;
  
  var li = document.createElement("li");
  li.className = "todo-item";
  li.innerHTML = `
    <span onclick="toggleComplete(this)">${task}</span>
    <button onclick="removeTodo(this)">delete</button>
  `;






  todoList.appendChild(li); // Add the new task to the list
  todoInput.value = ""; // Clear the input
}

function toggleComplete(taskElement) {
  taskElement.parentElement.classList.toggle("completed");
}

function removeTodo(button) {
  button.parentElement.remove();
}
