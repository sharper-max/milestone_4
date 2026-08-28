document.addEventListener("DOMContentLoaded", function () {

    // Mobile menu
    const menuButton = document.querySelector("#menu-button");
    const navMenu = document.querySelector("#nav-menu");

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", function () {
            navMenu.classList.toggle("show");

            if (navMenu.classList.contains("show")) {
                menuButton.setAttribute("aria-expanded", "true");
            } else {
                menuButton.setAttribute("aria-expanded", "false");
            }
        });
    }


    // Contact form validation
    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {

        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const message = document.querySelector("#message");

        const nameError = document.querySelector("#name-error");
        const emailError = document.querySelector("#email-error");
        const messageError = document.querySelector("#message-error");

        name.addEventListener("input", function () {
            if (name.value.trim() !== "") {
                nameError.textContent = "";
            }
        });

        email.addEventListener("input", function () {
            if (email.value.trim() !== "") {
                emailError.textContent = "";
            }
        });

        message.addEventListener("input", function () {
            if (message.value.trim() !== "") {
                messageError.textContent = "";
            }
        });

        contactForm.addEventListener("submit", function (event) {

            let valid = true;

            if (name.value.trim() === "") {
                nameError.textContent = "Please enter your name.";
                valid = false;
            }

            if (email.value.trim() === "") {
                emailError.textContent = "Please enter your email.";
                valid = false;
            }

            if (message.value.trim() === "") {
                messageError.textContent = "Please enter a message.";
                valid = false;
            }

            if (!valid) {
                event.preventDefault();
            }
        });
    }

});
