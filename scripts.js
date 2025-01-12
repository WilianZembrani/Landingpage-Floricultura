const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".container");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});