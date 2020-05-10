let show = true;

const container = document.querySelector("header .container");
const menuSection = document.querySelector(".menu-section");
const menuToogle = menuSection.querySelector(".menu-toggle");

menuToogle.addEventListener("click", () => {
    menuSection.classList.toggle("on", show);
    container.classList.toggle("on", show);
    show = !show;
});