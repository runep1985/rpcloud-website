function updateDarkIcon() {
    const btn = document.getElementById("darkModeToggle");
    if (!btn) return;

    const isDark = document.body.classList.contains("dark-mode");
    btn.textContent = isDark ? "☀️" : "🌙";
}

// Apply saved theme immediately
(function () {
    const saved = localStorage.getItem("darkMode");

    if (saved === "enabled") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }

    updateDarkIcon();
})();

// Click handler (event delegation = bulletproof)
document.addEventListener("click", function (e) {
    const btn = e.target.closest("#darkModeToggle");
    if (!btn) return;

    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");

    updateDarkIcon();
});
