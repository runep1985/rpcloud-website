function initUI() {
    const btn = document.querySelector(".top-button");

    if (!btn) return;

    btn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

window.initUI = initUI;
