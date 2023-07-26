function updateTitle() {
    const userName = document.getElementById("userId").value.trim();

    if (userName !== "") {
        document.getElementById("appName").textContent = `${userName}'s To-Do List`;


        // Save the 'userName' to Local Storage
        localStorage.setItem('userName', userName);
    }
}

// Update the app title with the user's name when the page loads
const userName = localStorage.getItem('userName');
if (userName) {
    document.getElementById("appName").innerText = `${userName}'s To-Do List`;



}

// Apply the 'updateTitle' function when the 'button1' is clicked


function goToNextPage() {
    // Navigate to "next.html"
    window.location.href = 'next.html';
}

function goToNamePage() {
    window.location.href = 'name.html';
}
function handleClick() {
    updateTitle();
    goToNamePage();
}

function goToHomePage() {
    window.location.href = 'index.html';
}

document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");

    addButton.addEventListener("click", handleAddButtonClick);

    function handleAddButtonClick() {
        const newTaskText = document.getElementById("newTask").value.trim();
        if (newTaskText !== "") {
            addNewTask(newTaskText);
            document.getElementById("newTask").value = ""; // Clear the input field after adding task
        }
    }

    function addNewTask(taskText) {
        const taskDiv = document.createElement("div");
        taskDiv.id = "taskAndButton"; // Use ID instead of class

        const taskCheckbox = document.createElement("input");
        taskCheckbox.type = "checkbox";
        taskCheckbox.id = "taskBox";

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
        taskSpan.id = "taskText";

        const buttonDiv = document.createElement("div");
        buttonDiv.id = "buttonStack";

        const editButton = document.createElement("button");
        editButton.id = "editButton"; // Use ID instead of class
        editButton.style.marginBottom = "8px";

        const editSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        editSvg.setAttribute("width", "12");
        editSvg.setAttribute("height", "10");
        editSvg.setAttribute("fill", "currentColor");
        editSvg.classList.add("bi", "bi-pencil-fill");
        editSvg.setAttribute("viewBox", "0 0 16 16");

        const editPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        editPath.setAttribute("d", "M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z");
        editSvg.appendChild(editPath);
        editButton.appendChild(editSvg);

        const deleteButton = document.createElement("button");
        deleteButton.id = "deleteButton"; // Use ID instead of class

        const deleteSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        deleteSvg.setAttribute("width", "12");
        deleteSvg.setAttribute("height", "10");
        deleteSvg.setAttribute("fill", "currentColor");
        deleteSvg.classList.add("bi", "bi-trash3-fill");
        deleteSvg.setAttribute("viewBox", "0 0 16 16");

        const deletePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        deletePath.setAttribute("d", "M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z");
        deleteSvg.appendChild(deletePath);
        deleteButton.appendChild(deleteSvg);

        // Append the elements to the DOM
        buttonDiv.appendChild(editButton);
        buttonDiv.appendChild(deleteButton);

        taskDiv.appendChild(taskCheckbox);
        taskDiv.appendChild(taskSpan);
        taskDiv.appendChild(buttonDiv);

        taskList.appendChild(taskDiv); // Append the new task to the task list
    }

    const newTaskInputAlternate = document.getElementById("newTask");
    newTaskInputAlternate.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            handleAddButtonClick();
        }

    });



});


function deleteTask(event) {
    const deleteButton = event.target;
    const taskCard = deleteButton.closest("#taskAndButton");
    if (taskCard) {
        taskCard.remove();
    }
}
const taskList = document.getElementById("taskList");
taskList.addEventListener("click", function (event) {
    const deleteButton = event.target;
    if (deleteButton.matches("#deleteButton") || deleteButton.matches("#deleteSvg")) {
        deleteTask(event);
    }
});

deleteSvg.addEventListener("click", deleteTask);


const taskText = document.getElementById("taskText");
function editTask(event) {
    const editButton = event.target;
    const taskText = editButton.closest("#taskAndButton").queryselector("#taskText");
    taskText.contentEditable = true;
    taskText.focus();



    if (editButton.matches("#editButton")) {
        editTask(event);
    }
}


editButton.addEventListener("click", editTask);