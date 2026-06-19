function initDarkMode() {

    const toggleBtn = document.getElementById("darkModeToggle");
    const root = document.documentElement;

    const DARK_CLASS = "dark-mode";
    const STORAGE_KEY = "rpcloud-darkmode";

    function updateIcon(isDark) {
        if (!toggleBtn) return;
        toggleBtn.textContent = isDark ? "☀️" : "🌙";
    }

    function applySavedMode() {
        const saved = localStorage.getItem(STORAGE_KEY);

        const isDark = saved === "enabled";

        root.classList.toggle(DARK_CLASS, isDark);
        updateIcon(isDark);
    }

    function toggleDarkMode() {
        const isDark = root.classList.toggle(DARK_CLASS);

        localStorage.setItem(
            STORAGE_KEY,
            isDark ? "enabled" : "disabled"
        );

        updateIcon(isDark);
    }

    if (toggleBtn) {
        toggleBtn.addEventListener("click", toggleDarkMode);
    }

    applySavedMode();
}

window.initDarkMode = initDarkMode;
