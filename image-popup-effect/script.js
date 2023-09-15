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
    img.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1694758086814-423e0c0d45b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
    );
    div.append(img);
    setTimeout(() => {
      img.setAttribute("class", "translate");
    }, 500);
    setTimeout(() => {
      div.remove();
    }, 1000);
  }, 500)
);
