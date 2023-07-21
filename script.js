function personalizeApp() {
    const userName = document.getElementById("userId").value.trim();
    const nameUpdate = document.getElementById("nameUpdate");
    if (userName !== "") {
        document.getElementById("appName").textContent = `${userName}'s To-Do List`;
        document.getElementById("nameUpdate").style.display = "none";




    }
    document.getElementById("userId").value = "";
}
personalizeApp();


const button1 = document.getElementById("button1");


function applyNameChange() {
    button1.addEventListener("click", personalizeApp);
}
applyNameChange();

// Retrieve the data from Local Storage
const userName = localStorage.getItem('userName');
const todoListData = JSON.parse(localStorage.getItem('todoListData'));

// Update the app title with the user's name when the page loads
if (userName) {
    document.getElementById("appName").innerText = `${userName}'s To-Do List`;
}

// Function to update the app title when the user submits the name
function updateTitle() {
    const name = document.getElementById("nameInput").value.trim();

    if (name) {
        document.getElementById("appName").innerText = `${name}'s To-Do List`;
    }

    // Save the 'name' to Local Storage
    localStorage.setItem('userName', name);
}

function navigateToNextPage() {
    const name = document.getElementById("nameInput").value.trim();

    if (name !== "") {
        // Save the 'name' to Local Storage
        localStorage.setItem('userName', name);
    }

    // Navigate to "next.html"
    window.location.href = 'next.html';
}
