import TaskManager from "../Classes/TaskManager.js";

let manager = new TaskManager();

window.addNewTask = function addNewTask() {
  let description = document.getElementById("description").value;
  if (!description.trim()) {
    alert("Please add a Task");
    return;
  }
  manager.addTask(description);
  showTasks();
  
};

function showTasks() {
  document.getElementById("activeTasks").innerHTML = "";
  document.getElementById("completedTasks").innerHTML = "";
  for (let task of manager.tasks) {
    if (task.completed) {
      document.getElementById(
        "completedTasks"
      ).innerHTML += `<div><li class='list-group-item d-inline-block w-75 mt-1 completed'> ${task.description}</li> 
      <button class='btn btn-success me-1 disabled-button' onclick="completeTask(${task.id})"> <i class="fa-solid fa-check"></i> </button>
      <button class='btn btn-primary me-1 disabled-button' onclick="updateTaskDescription(${task.id})"> <i class="text-light fa-sharp fa-solid fa-pencil"></i> </button>
      <button class='btn btn-danger me-1 disabled-button' onclick="deleteTask(${task.id})"> <i class="fa-solid fa-trash"></i> </button </div>
    `;
    } else {
      document.getElementById(
        "activeTasks"
      ).innerHTML += `<div><li class='list-group-item d-inline-block w-75 mt-1'> ${task.description}</li> 
      <button class='btn btn-success me-1' onclick='completeTask(${task.id})'> <i class="fa-solid fa-check"></i> </button>
      <button class='btn btn-primary me-1' onclick="updateTaskDescription(${task.id})"> <i class="text-light fa-sharp fa-solid fa-pencil"></i> </button>
      <button class='btn btn-danger me-1' onclick="deleteTask(${task.id})"> <i class="fa-solid fa-trash"></i> </button </div>
    `;
    }
  }
  localStorage.setItem("Task", JSON.stringify(manager.tasks));
}

window.updateTaskDescription = function updateTaskDescription(id) {
  let newDescription = prompt("New mission description");
  if (newDescription !== null && newDescription !== "") { 
    manager.updateTaskDescription(id, newDescription);
    showTasks();
  }
}

window.completeTask = function completeTask(id) {  
  manager.completeTask(id);  
  showTasks();
};

window.deleteTask = function deleteTask(id) {
  if (confirm("Are you Sure?")){
  manager.deleteTask(id);
  showTasks();
};
}

