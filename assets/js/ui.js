function initUI() {

    // Scroll to top
    const btn = document.querySelector(".top-button");
    if (btn) {
        btn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
}

window.initUI = initUI;
