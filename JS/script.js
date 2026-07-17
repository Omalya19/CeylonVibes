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
    const hamburgerBtn = document.getElementById("menu-toggle") || document.querySelector(".cv-hamburger-btn");
    const sidebarMenu = document.querySelector(".cv-sidebar-menu");
    const closeBtn = document.querySelector(".close-btn");
    const menuOverlay = document.querySelector(".cv-menu-overlay");

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener("click", function () {
            if (sidebarMenu) sidebarMenu.classList.add("active");
            if (menuOverlay) menuOverlay.classList.add("active");
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            if (sidebarMenu) sidebarMenu.classList.remove("active");
            if (menuOverlay) menuOverlay.classList.remove("active");
        });
    }

    if (menuOverlay) {
        menuOverlay.addEventListener("click", function () {
            if (sidebarMenu) sidebarMenu.classList.remove("active");
            if (menuOverlay) menuOverlay.classList.remove("active");
        });
    }
});