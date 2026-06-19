document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-image");
    const closeBtn = document.querySelector(".close-lightbox");

    document.querySelectorAll(".gallery-image").forEach(image => {
        image.addEventListener("click", () => {
            lightbox.style.display = "flex";
            img.src = image.src;
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
