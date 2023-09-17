"use strict";
const mainDiv = document.querySelector(".main");

const btn = document.querySelector("#throttle");

// Throttling Function
const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();

    if (now - prev > delay) {
      prev = now;

      return func(...args);
    }
  };
};

mainDiv.addEventListener(
  "mousemove",
  throttleFunction((e) => {
    const div = document.createElement("div");
    div.classList.add("div");
    document.body.querySelector(".main").append(div);
    div.style.left = e.clientX + "px";
    div.style.top = e.clientY + "px";
    const img = document.createElement("img");
    const num = Math.floor(Math.random() * 9);
    const url = "img/" + num + ".jpg";
    console.log(url);
    img.setAttribute("src", url);
    img.classList.add("img");
    div.append(img);

    setTimeout(() => {
      img.classList.add("translate");
      setTimeout(() => {
        img.classList.remove("translate");
      }, 800);
    }, 0);

    setTimeout(() => {
      div.remove();
    }, 1000);
  }, 500)
);
