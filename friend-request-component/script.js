"use-strict";

const addButton = document.querySelector(".add-friend");
const statusFriend = document.querySelector(".friend-status");
const imgContainer = document.querySelector(".person-image");
const likeIcon = document.querySelector(".like");
const cur = document.querySelector(".cursor");

let isFriend = false;

const logic = function () {
  if (!isFriend) {
    statusFriend.textContent = "Friend";
    statusFriend.style.color = "green";
    addButton.classList.add("friend");
    addButton.textContent = "Remove friend";
    isFriend = true;
  } else {
    statusFriend.textContent = "Stranger";
    statusFriend.style.color = "orangered";
    addButton.classList.remove("friend");
    addButton.textContent = "Add friend";
    isFriend = false;
  }
};
let likeTime;

addButton.addEventListener("click", logic);
imgContainer.addEventListener("dblclick", () => {
  clearTimeout(likeTime);

  likeIcon.style.transform = "translate(-50%, -50%) scale(1)";

  likeTime = setTimeout(() => {
    likeIcon.style.transform = "translate(-50%, -50%) scale(0)";
  }, 1000);
});

document.body.addEventListener("mousemove", function (e) {
  cur.style.left = e.x + "px";
  cur.style.top = e.y + "px";
});
