function initContact() {

    const btn = document.getElementById("contactBtn");
    const popup = document.getElementById("contactPopup");
    const closeBtn = document.querySelector(".close");
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    if (!btn || !popup || !form) return;

    function openPopup() {
        popup.classList.add("active");
    }

    function closePopup() {
        popup.classList.remove("active");
    }

    btn.addEventListener("click", openPopup);
    closeBtn?.addEventListener("click", closePopup);

    popup.addEventListener("click", (e) => {
        if (e.target === popup) closePopup();
    });

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const response = await fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: { "Accept": "application/json" }
        });

        if (response.ok) {
            form.reset();
            form.style.display = "none";
            successMessage?.classList.remove("hidden");
        } else {
            alert("Kunne ikke sende meldingen. Prøv igjen senere.");
        }
    });
}

window.initContact = initContact;
