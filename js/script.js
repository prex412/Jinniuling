const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

function reveal() {

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(item => {

        const windowHeight = window.innerHeight;

        const revealTop = item.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();

function openImage(src) {

    const lightbox = document.getElementById("lightbox");

    const lightboxImg = document.getElementById("lightbox-img");

    if (lightbox) {

        lightbox.style.display = "flex";

        lightboxImg.src = src;

    }

}

document.addEventListener("click", function(e) {

    if (e.target.id === "lightbox") {

        e.target.style.display = "none";

    }

});
