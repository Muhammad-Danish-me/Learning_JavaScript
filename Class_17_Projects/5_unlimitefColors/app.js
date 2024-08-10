const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let stopRef;
const generatedColor = randomColor();

const body = document.querySelector("body");
const startbtn = document.getElementById("start");
const stopbtn = document.getElementById("stop");

const startChangingColor = function () {
  function changeBgColor() {
    body.style.backgroundColor = randomColor();
  }
  stopRef = setInterval(changeBgColor, 1000);
};
const stopChangingColor = function () {
  clearInterval(stopRef);
  stopRef = null;
};

startbtn.addEventListener("click", startChangingColor);
stopbtn.addEventListener("click", stopChangingColor);
