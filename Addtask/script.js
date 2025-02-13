// Select Elements
let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

let taskText = taskInput.value;

// Function to add a task
function addTask() {

    // take task text
    let li = document.createElement("li");
    taskList.appendChild(li);

    // Append task

    // Clear input
}

// Event Listener
// addTaskButton.addEventListener("click", addTask);