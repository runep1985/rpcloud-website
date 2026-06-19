document.querySelectorAll(".js-lightbox").forEach(img => {
    img.addEventListener("click", () => {
        const lightbox = document.getElementById("lightbox");
        const image = document.getElementById("lightbox-image");

        image.src = img.src;
        lightbox.classList.add("active");
    });
});

function closeImage() {
    document.getElementById("lightbox").classList.remove("active");
}

document.querySelector(".close-lightbox")?.addEventListener("click", closeImage);

document.getElementById("lightbox")?.addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeImage();
});
