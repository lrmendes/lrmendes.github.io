// Make Cards
// Color Pallete: https://coolors.co/05668d-028090-00a896-02c39a-f0f3bd
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

let show = true;

const container = document.querySelector("header .container");
const menuSection = document.querySelector(".menu-section");
const menuToogle = menuSection.querySelector(".menu-toggle");

menuToogle.addEventListener("click", () => {
    menuSection.classList.toggle("on", show);
    container.classList.toggle("on", show);
    show = !show;
});