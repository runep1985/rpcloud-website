(function () {
    const toggleBtn = document.getElementById("darkModeToggle");
    const root = document.documentElement;

    const DARK_CLASS = "dark-mode";
    const STORAGE_KEY = "rpcloud-darkmode";

    // Apply saved mode on load
    function applySavedMode() {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (saved === "enabled") {
            root.classList.add(DARK_CLASS);
            updateIcon(true);
        } else {
            root.classList.remove(DARK_CLASS);
            updateIcon(false);
        }
    }

    // Update icon based on mode
    function updateIcon(isDark) {
        if (!toggleBtn) return;
        toggleBtn.textContent = isDark ? "☀️" : "🌙";
    }

    // Toggle mode
    function toggleDarkMode() {
        const isDark = root.classList.toggle(DARK_CLASS);

        localStorage.setItem(
            STORAGE_KEY,
            isDark ? "enabled" : "disabled"
        );

        updateIcon(isDark);
    }

    // Init
    applySavedMode();

    // Event
    if (toggleBtn) {
        toggleBtn.addEventListener("click", toggleDarkMode);
    }
})();
