document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("scrollTopBtn");

    if (btn) {
        btn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
