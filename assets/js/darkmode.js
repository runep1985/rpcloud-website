const darkBtn = document.getElementById("darkModeToggle");

// Load saved mode
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkBtn.textContent = "☀️";
}

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        darkBtn.textContent = "☀️";
    } else {
        localStorage.setItem("darkMode", "disabled");
        darkBtn.textContent = "🌙";
    }
});