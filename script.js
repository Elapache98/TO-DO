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


