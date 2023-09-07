const main = document.querySelector(".main");

const data = main.getBoundingClientRect();
console.log(data);

window.addEventListener("mousemove", (e) => {
  const condition = e.y >= data.top && e.y <= data.bottom;
  const fromLeft = function () {
    if (e.x >= data.left && e.x <= data.left + data.width / 2 && condition) {
      const value = +(data.left + data.width / 2 - e.x).toFixed(0);
      const final = (value * (256 / (data.width / 2))).toFixed(0);
      return final;
    }
    return false;
  };
  const fromRight = function () {
    if (e.x > data.left + data.width / 2 && e.x <= data.right && condition) {
      const value = -(data.width / 2 + data.left - e.x).toFixed(0);
      const final = (value * (256 / (data.width / 2))).toFixed(0);
      return final;
    }
    return false;
  };

  if (fromLeft()) {
    const value = fromLeft();
    main.style.backgroundColor = `rgb(${value}, 0, 0)`;
  }
  if (fromRight()) {
    const value = fromRight();
    main.style.backgroundColor = `rgb(0, 0 , ${value})`;
  }
});

main.addEventListener("mouseleave", () => {
  main.style.backgroundColor = "#fff";
});
