// Welcome message
console.log("Website successfully loaded!");

// Contact Form Validation
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }

    alert("Thank you! Your message has been sent.");
    return true;
}

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuClose = document.getElementById("menu-close");
    const navLinks = document.getElementById("nav-links");
    const menuOverlay = document.getElementById("menu-overlay");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            if (navLinks) navLinks.classList.add("active");
            if (menuOverlay) menuOverlay.classList.add("active");
        });
    }

    if (menuClose) {
        menuClose.addEventListener("click", function () {
            if (navLinks) navLinks.classList.remove("active");
            if (menuOverlay) menuOverlay.classList.remove("active");
        });
    }

    if (menuOverlay) {
        menuOverlay.addEventListener("click", function () {
            if (navLinks) navLinks.classList.remove("active");
            if (menuOverlay) menuOverlay.classList.remove("active");
        });
    }
});