const menu = document.querySelector(".menu");
const nav = document.querySelector("nav")
const pageTitle = document.querySelector(".hero-content")
const skills = document.querySelector(".skills-nav");
const about = document.querySelector(".about-nav");
const work = document.querySelector(".work-nav");
const contact = document.querySelector(".contact-nav");


//Hero container: Mobile menu navigation display
menu.addEventListener("click", function () {
    nav.classList.add("nav-mobile");
    menu.innerHTML = "";
    pageTitle.innerHTML = "";
});

//Hero container: Mobile menu navigation hide if selection is clicked
skills.addEventListener("click", function () {
    nav.classList.remove("nav-mobile");
    menu.innerHTML = "Menu";
});
about.addEventListener("click", function () {
    nav.classList.remove("nav-mobile");
    menu.innerHTML = "Menu";
});
work.addEventListener("click", function () {
    nav.classList.remove("nav-mobile");
    menu.innerHTML = "Menu";
});
contact.addEventListener("click", function () {
    nav.classList.remove("nav-mobile");
    menu.innerHTML = "Menu";
});


