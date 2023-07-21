function updateTitle() {
    const userName = document.getElementById("userId").value.trim();

    if (userName !== "") {
        document.getElementById("appName").textContent = `${userName}'s To-Do List`;
        document.getElementById("nameUpdate").style.display = "none";
        document.getElementById("userId").value = "";

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
button1.addEventListener("click", updateTitle);

function goToNextPage() {
    // Navigate to "next.html"
    window.location.href = 'next.html';
}
