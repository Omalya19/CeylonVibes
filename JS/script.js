// Welcome massage
console.log("Website successfully loaded!");

// Contact Form
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

//Index
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuClose = document.getElementById("menu-close");
    const navLinks = document.getElementById("nav-links");
    const menuOverlay = document.getElementById("menu-overlay");

    if (menuToggle && navLinks && menuOverlay) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.add("active");
            menuOverlay.classList.add("active");
        });
    }

    if (menuClose && navLinks && menuOverlay) {
        menuClose.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuOverlay.classList.remove("active");
        });
    }

    if (menuOverlay && navLinks) {
        menuOverlay.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuOverlay.classList.remove("active");
        });
    }
});