// navbar.js

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-links a");
    const currentPath = window.location.pathname;

    links.forEach(link => {
        const linkPath = new URL(link.href).pathname;

        // Highlight active page
        if (linkPath === currentPath) {
            link.classList.add("active");
        }
    });
});