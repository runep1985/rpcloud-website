document.addEventListener("DOMContentLoaded", () => {

    const lightbox = document.getElementById("lightbox");
    const image = document.getElementById("lightbox-image");
    const closeBtn = document.querySelector(".close-lightbox");

    document.querySelectorAll(".js-lightbox").forEach(img => {
        img.addEventListener("click", () => {
            image.src = img.src;
            lightbox.classList.add("active");
        });
    });

    function closeLightbox() {
        lightbox.classList.remove("active");
        image.src = "";
    }

    closeBtn?.addEventListener("click", closeLightbox);

    lightbox?.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
    });

});
