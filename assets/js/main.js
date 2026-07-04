// =========================================
// MAIN ENTRY POINT
// =========================================
document.addEventListener("DOMContentLoaded", () => {

    initDarkMode();
    initScrollTop();
    initNavbarScrollEffect();
    initContactModal();
    initLightbox();
    initCVModal();
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
// CONTACT MODAL
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
// LIGHTBOX
// =========================================
function initLightbox() {

    const images = document.querySelectorAll(".gallery-image");
    if (!images.length) return;

    const modal = createLightbox();

    images.forEach(img => {
        img.addEventListener("click", () => {
            modal.img.src = img.src;
            modal.wrapper.classList.add("active");
        });
    });
}

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

// =========================================
// CV MODAL SYSTEM
// =========================================
function initCVModal() {

    const modal = document.getElementById("cv-modal");
    const title = document.getElementById("cv-modal-title");
    const text = document.getElementById("cv-modal-text");
    const closeBtn = document.getElementById("cv-modal-close");
    const items = document.querySelectorAll(".cv-item");

    if (!modal || !title || !text || !closeBtn || !items.length) return;

    items.forEach(item => {

        item.addEventListener("click", () => {

            title.textContent = item.dataset.title || "";
            text.textContent = item.dataset.text || "";

            modal.classList.add("active");
        });
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