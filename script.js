const tabs = document.querySelectorAll(".tab");
const slides = document.querySelector(".slides");
const tab1 = document.querySelector("#tab-first");
const tab2 = document.querySelector("#tab-second");
const btnRight = document.querySelectorAll(".next");
const btnLeft = document.querySelectorAll(".prev");

let curSlide = 0;
const maxSlide = tabs.length;

tabs.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

const goToSlide = function (slide) {
  tabs.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

goToSlide(0);

btnRight.forEach((btnRight) =>
  btnRight.addEventListener("click", function () {
    curSlide === maxSlide - 1 ? (curSlide = 0) : curSlide++;

    tabs.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
    );
  })
);
btnLeft.forEach((btnLeft) =>
  btnLeft.addEventListener("click", function () {
    curSlide === 0 ? (curSlide = maxSlide - 1) : curSlide--;

    tabs.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
    );
  })
);

const previousSlide = function () {
  curSlide === 0 ? (curSlide = maxSlide - 1) : curSlide--;
  goToSlide(curSlide);
};

const nextSlide = function () {
  curSlide === maxSlide - 1 ? (curSlide = 0) : curSlide++;
  goToSlide(curSlide);
};

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") previousSlide();
});
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") nextSlide();
});
