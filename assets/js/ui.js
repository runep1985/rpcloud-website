document.addEventListener("DOMContentLoaded", () => {
    initDarkModeToggle();
    initScrollToTop();
});

/* -----------------------------
   DARK MODE
----------------------------- */
function initDarkModeToggle() {
    const btn = document.getElementById("darkModeToggle");
    if (!btn) return;

    btn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    // load saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
}

/* -----------------------------
   SCROLL TO TOP
----------------------------- */
function initScrollToTop() {
    const btn = document.querySelector(".top-button");
    if (!btn) return;

    btn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}