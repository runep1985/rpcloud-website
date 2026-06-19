function openImage(src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-image');

    img.src = src;
    lightbox.classList.add('active');
}

function closeImage() {
    document.getElementById('lightbox').classList.remove('active');
}
