function openImage(src){
    document.getElementById('lightbox-image').src = src;
    document.getElementById('lightbox').style.display = 'flex';
}

function closeImage(){
    document.getElementById('lightbox').style.display = 'none';
}
