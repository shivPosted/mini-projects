"use-strict";

const container = document.querySelector(".main");
const superheroes = document.querySelectorAll(".superhero");
let image;
const logic = function (e) {
  const str = e.target.className.split(" ")[0];
  image = document.querySelector(`.${str}-img`);
  image.style.opacity = this;
};

superheroes.forEach((curr) => {
  curr.addEventListener("mouseenter", logic.bind(100));
  curr.addEventListener("mouseleave", logic.bind(0));
  curr.addEventListener("mousemove", function (e) {
    image.style.left = e.x + "px";
    image.style.top = e.y + "px";
  });
});
