"use-strict";

const addButton = document.querySelector(".add-friend");
const statusFriend = document.querySelector(".friend-status");

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

addButton.addEventListener("click", logic);
