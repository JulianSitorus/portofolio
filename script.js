function openMenu(){
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

// ================================= Email ======================================
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e){
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors",
    })
        .then(() => {
            // url ty
            window.location.href='/thankyou.html'
        })
        .catch((e) => alert("Error occused"));
});
