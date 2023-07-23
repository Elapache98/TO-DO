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
const button1 = document.getElementById("button1");
button1.addEventListener("click", handleClick);

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


// JavaScript Code
document.addEventListener("DOMContentLoaded", function () {
    // Get the "Add" button and the task input element
    const addButton = document.getElementById("addButton");
    const newTaskInput = document.getElementById("newTask");

    // Get the task list container
    const taskListContainer = document.getElementById("taskList");

    // Add click event listener to the "Add" button
    addButton.addEventListener("click", function () {
        // Get the value of the new task from the input element
        const newTaskValue = newTaskInput.value.trim();

        // Check if the new task is not empty
        if (newTaskValue !== "") {
            // Create a new task card container
            const taskCard = document.createElement("div");
            taskCard.classList.add("taskAndButton");

            // Create checkbox for the new task
            const taskBox = document.createElement("input");
            taskBox.type = "checkbox";
            taskBox.classList.add("taskBox");

            // Create span element for the task text
            const taskText = document.createElement("span");
            taskText.classList.add("taskText");
            taskText.textContent = newTaskValue;

            // Create buttons for the task
            const editButton = document.createElement("editButton");
            editButton.classList.add("editButton");
            editButton.innerHTML = `<svg id="svg" style="margin-left:8px;" xmlns="http://www.w3.org/2000/svg" width="12" height="10" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                        </svg>`;

            const deleteButton = document.createElement("deleteButton");
            deleteButton.classList.add("deleteButton");
            deleteButton.innerHTML = `<svg id="svg" style="margin-left: 8px;" xmlns="http://www.w3.org/2000/svg" width="12" height="10" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                        </svg>`;

            // Append elements to the task card container
            taskCard.appendChild(taskBox);
            taskCard.appendChild(taskText);
            taskCard.appendChild(editButton);
            taskCard.appendChild(deleteButton);

            // Append the task card container to the task list container
            taskListContainer.appendChild(taskCard);

            // Clear the new task input
            newTaskInput.value = "";
        }
    });
});

