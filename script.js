const menu = document.querySelectorAll(".menu");
const list = document.querySelector(".list");
const btns = document.querySelector(".btns");
const overlay = document.querySelector(".overlay");
const slides = document.querySelectorAll(".slide");
const btn = document.querySelectorAll(".btn");
const imgContent = document.querySelectorAll(".img--content");

let curClick = 0;
let maxSlide = slides.length - 1;
const hamburClicker = function () {
  list.classList.toggle("list--active");
  overlay.classList.toggle("overlay--active");
};

menu.forEach((menu) => {
  menu.addEventListener("click", function () {
    hamburClicker();
  });
});

const goToNextSlides = function (click) {
  slides.forEach(
    (slide, i) => (slide.style.transform = `translateX(${100 * (i - click)}%)`)
  );
};

const btnChekcer = function (e) {
  btn.forEach((btn) => btn.classList.remove("btn--active"));
  e.target.classList.add("btn--active");
};
// btns.addEventListener("cl");
const move = function (e) {
  if (e.target.classList.contains("btn--next")) {
    btnChekcer(e);
    if (curClick == maxSlide) {
      curClick = 0;
    } else {
      curClick++;
    }
    imgContentRemoval();
    goToNextSlides(curClick);
  } else if (e.target.classList.contains("btn--prev")) {
    btnChekcer(e);
    if (curClick == 0) {
      curClick = maxSlide;
    } else curClick--;
    imgContentRemoval();
    goToNextSlides(curClick);
  }
};

const imgContentRemoval = function () {
  imgContent.forEach((img) => img.classList.remove("img--content__active"));
  document
    .querySelector(`.img--content__${curClick + 1}`)
    .classList.add("img--content__active");
};

const init = function () {
  goToNextSlides(0);
  imgContentRemoval();
};

btns.addEventListener("click", move);
overlay.addEventListener("click", hamburClicker);

init();
