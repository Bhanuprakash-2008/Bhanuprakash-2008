// ========================================
// PORTFOLIO JAVASCRIPT
// ========================================

// Page loaded
document.addEventListener("DOMContentLoaded", function () {

    console.log("Portfolio loaded successfully!");

    // Contact form
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = form.querySelector('input[name="name"]').value;
            const email = form.querySelector('input[name="email"]').value;
            const subject = form.querySelector('input[name="subject"]').value;
            const message = form.querySelector('textarea[name="message"]').value;

            if (name === "" || email === "" || subject === "" || message === "") {
                alert("Please fill in all the fields.");
                return;
            }

            alert("Thank you, " + name + "! Your message has been submitted.");

            // Clear the form
            form.reset();
        });
    }

});
