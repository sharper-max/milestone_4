document.addEventListener("DOMContentLoaded", function () {

    // Menu button
    const menuButton = document.querySelector("#menu-button");
    const navMenu = document.querySelector("#nav-menu");

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", function () {
            const isOpen = navMenu.classList.toggle("show");

            menuButton.setAttribute("aria-expanded", isOpen);
        });
    }


    // Contact form validation
    const form = document.querySelector("#contact-form");

    if (form) {
        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const subject = document.querySelector("#subject");
        const message = document.querySelector("#message");

        const nameError = document.querySelector("#name-error");
        const emailError = document.querySelector("#email-error");
        const subjectError = document.querySelector("#subject-error");
        const messageError = document.querySelector("#message-error");


        name.addEventListener("input", function () {
            if (name.value.trim() !== "") {
                nameError.textContent = "";
            }
        });


        email.addEventListener("input", function () {
            if (email.value.includes("@")) {
                emailError.textContent = "";
            }
        });


        subject.addEventListener("input", function () {
            if (subject.value.trim() !== "") {
                subjectError.textContent = "";
            }
        });


        message.addEventListener("input", function () {
            if (message.value.trim() !== "") {
                messageError.textContent = "";
            }
        });


        form.addEventListener("submit", function (event) {
            let valid = true;

            nameError.textContent = "";
            emailError.textContent = "";
            subjectError.textContent = "";
            messageError.textContent = "";


            if (name.value.trim() === "") {
                nameError.textContent = "Please enter your name.";
                valid = false;
            }


            if (email.value.trim() === "") {
                emailError.textContent = "Please enter your email.";
                valid = false;
            } else if (!email.value.includes("@")) {
                emailError.textContent = "Please enter a valid email.";
                valid = false;
            }


            if (subject.value.trim() === "") {
                subjectError.textContent = "Please enter a subject.";
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


    // Show More About Me button
    const showMoreBtn = document.querySelector("#showMoreBtn");
    const extraInfo = document.querySelector("#extraInfo");

    if (showMoreBtn && extraInfo) {
        showMoreBtn.addEventListener("click", function () {
            extraInfo.hidden = !extraInfo.hidden;

            if (extraInfo.hidden) {
                showMoreBtn.textContent = "Show More";
            } else {
                showMoreBtn.textContent = "Show Less";
            }
        });
    }

});
