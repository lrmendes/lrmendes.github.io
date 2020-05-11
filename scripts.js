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


const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const videos = [
  {
    title: "A FullStack project build in a course of Javascript Modern Frameworks.",
    duration: "Web & Mobile", 
    thumb: "assets/cards/be-the-hero.png", // 
    video_id: "GykTLqODQuU"
  },
  {
    title: "E-Commerce System that provides an way for the local stores sell their products and local customers buy them.",
    duration: "Web & Mobile",
    thumb: "assets/cards/locdown.png",
    video_id: "HN1UjzRSdBk"
  },
  {
    title: "Complete Sales Module for a cooperative Enterprise Resource Planning System.",
    duration: "Web",
    thumb: "assets/cards/erpcrm.png",
    video_id: "rAzHvYnQ8DY"
  },
];

videos.map(video => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", video.video_id);
  cardClone.querySelector("img").src = video.thumb;
  cardClone.querySelector(".title").innerHTML = video.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML =
    video.duration;
  sectionCards.appendChild(cardClone);
});

card.remove();

// Modal actions
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = [...document.querySelectorAll(".cards .card")];

cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.querySelector(
      "iframe"
    ).src = `https://www.youtube.com/embed/${card.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector("iframe").src = ``;
  document.querySelector("body").style.overflow = "initial";
});