function initLightbox() {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-image");
    const closeBtn = document.querySelector(".close-lightbox");

    if (!lightbox || !img) return;

    document.querySelectorAll(".gallery-image").forEach(image => {
        image.addEventListener("click", () => {
            lightbox.style.display = "flex";
            img.src = image.src;
        });
    });

    function close() {
        lightbox.style.display = "none";
        img.src = "";
    }

    closeBtn?.addEventListener("click", close);

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) close();
    });
}

window.initLightbox = initLightbox;
