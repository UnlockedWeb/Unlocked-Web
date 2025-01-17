VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": .5
});


const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
navbar.classList.toggle("show-menu");
});