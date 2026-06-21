// =========================================
// MAIN ENTRY POINT
// =========================================
document.addEventListener("DOMContentLoaded", () => {

    initDarkMode();
    initScrollTop();
    initNavbarScrollEffect();
    initContactModal(); // ✅ FIXED: was missing
    initLightbox();      // ✅ NEW: image system
});


// =========================================
// DARK MODE SYSTEM
// =========================================
function initDarkMode() {

    const button = document.getElementById("theme-toggle");
    if (!button) return;

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
    }

    button.addEventListener("click", () => {

        const current = document.documentElement.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";

        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
    });
}


// =========================================
// SCROLL TO TOP
// =========================================
function initScrollTop() {

    const button = document.getElementById("scrollTopBtn");
    if (!button) return;

    window.addEventListener("scroll", () => {
        button.style.display = window.scrollY > 300 ? "block" : "none";
    });

    button.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}


// =========================================
// NAVBAR SCROLL EFFECT
// =========================================
function initNavbarScrollEffect() {

    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 10);
    });
}


// =========================================
// CONTACT MODAL (FIXED)
// Uses class toggle instead of inline styles
// =========================================
function initContactModal() {

    const openBtn = document.getElementById("contactBtn");
    const modal = document.getElementById("contact-modal");
    const closeBtn = document.getElementById("close-modal");

    if (!openBtn || !modal || !closeBtn) return;

    openBtn.addEventListener("click", () => {
        modal.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
}


// =========================================
// LIGHTBOX SYSTEM (NEW)
// Click image → fullscreen preview
// =========================================
function initLightbox() {

    const images = document.querySelectorAll(".gallery-image");
    const modal = createLightbox();

    images.forEach(img => {
        img.addEventListener("click", () => {
            modal.img.src = img.src;
            modal.wrapper.classList.add("active");
        });
    });
}


// Creates lightbox DOM once
function createLightbox() {

    const wrapper = document.createElement("div");
    wrapper.className = "lightbox";

    const img = document.createElement("img");

    wrapper.appendChild(img);
    document.body.appendChild(wrapper);

    wrapper.addEventListener("click", () => {
        wrapper.classList.remove("active");
    });

    return { wrapper, img };
}