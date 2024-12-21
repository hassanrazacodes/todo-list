const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;

    const editIcon = document.createElement("img");
    editIcon.src = "https://cdn-icons-png.flaticon.com/512/1159/1159633.png"; // Edit icon
    editIcon.alt = "Edit";
    editIcon.addEventListener("click", () => {
        const newText = prompt("Edit your task:", taskContent.textContent);
        if (newText) taskContent.textContent = newText.trim();
    });

    const deleteIcon = document.createElement("img");
    deleteIcon.src = "https://cdn-icons-png.flaticon.com/512/3096/3096673.png"; // Delete icon
    deleteIcon.alt = "Delete";
    deleteIcon.addEventListener("click", () => {
        taskDiv.remove();
    });

    taskDiv.appendChild(taskContent);
    taskDiv.appendChild(editIcon);
    taskDiv.appendChild(deleteIcon);
    taskList.appendChild(taskDiv);

    taskInput.value = "";
});