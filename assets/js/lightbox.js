function initLightbox() {

    const images = document.querySelectorAll(".gallery-image");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-image");

    if (!images || !lightbox || !lightboxImg) return;

    images.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.classList.add("active");
            lightboxImg.src = img.src;
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });
}

window.initLightbox = initLightbox;
