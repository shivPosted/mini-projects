'use strict';

document.querySelector('.color-btn').addEventListener('click', function () {
  const RED = Math.trunc(Math.random() * 205) + 50;
  const GREEN = Math.trunc(Math.random() * 205) + 50;
  const BLUE = Math.trunc(Math.random() * 205) + 50;

  document.body.style.backgroundColor =
    'rgb(' + RED + ',' + GREEN + ',' + BLUE + ')';

  document.querySelector('.display-red').textContent = RED;
  document.querySelector('.display-green').textContent = GREEN;
  document.querySelector('.display-blue').textContent = BLUE;
});
