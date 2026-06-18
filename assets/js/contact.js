const btn = document.getElementById("contactBtn");
const popup = document.getElementById("contactPopup");
const closeBtn = document.querySelector(".close");

btn.onclick = () => {
    popup.style.display = "block";
}

closeBtn.onclick = () => {
    popup.style.display = "none";
}

window.onclick = (e) => {
    if(e.target === popup){
        popup.style.display = "none";
    }
}

const form = document.getElementById("contactForm");

form.addEventListener("submit", async function(e){

    e.preventDefault();

    const response = await fetch(form.action,{
        method:"POST",
        body:new FormData(form),
        headers:{
            "Accept":"application/json"
        }
    });

    if(response.ok){

        form.reset();

        form.style.display = "none";

        document.getElementById("successMessage")
                .style.display = "block";

    }else{

        alert("Kunne ikke sende meldingen. Prøv igjen senere.");

    }

});