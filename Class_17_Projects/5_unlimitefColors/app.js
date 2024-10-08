const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
const generatedColor = randomColor();

const body = document.querySelector("body");
const startbtn = document.getElementById("start");
const stopbtn = document.getElementById("stop");

let stopRef;
const startChangingColor = function () {
  if (!stopRef) {
    stopRef = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(stopRef);
  stopRef = null;
};

startbtn.addEventListener("click", startChangingColor);
stopbtn.addEventListener("click", stopChangingColor);
