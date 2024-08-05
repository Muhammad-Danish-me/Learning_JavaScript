const buttons = document.querySelectorAll(".button");
console.log(buttons);
const body = document.querySelector("body");
const clear = document.querySelector("#clear");

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => {
    // console.log(e.target);
    if (e.target.id == "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "green") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
clear.addEventListener("click", () => {
  body.style.backgroundColor = "white";
});
