document.addEventListener("DOMContentLoaded", () => {
    const darkBtn = document.getElementById("darkModeToggle");
    if (!darkBtn) return;

    function updateIcon() {
        const isDark = document.body.classList.contains("dark-mode");
        darkBtn.textContent = isDark ? "☀️" : "🌙";
    }

    // Load saved mode
    const saved = localStorage.getItem("darkMode");

    if (saved === "enabled") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }

    updateIcon();

    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const isDark = document.body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");

        updateIcon();
    });
});
