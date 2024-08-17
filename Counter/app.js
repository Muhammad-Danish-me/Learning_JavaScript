const display = document.getElementById("display");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const reset = document.getElementById("reset");

let num = 1;

// Increase
increaseBtn.addEventListener("click", () => {
  display.innerHTML = num++;
});

// Decrease
decreaseBtn.addEventListener("click", () => {
  if (num > 0) {
    display.innerHTML = --num;
  }
});

// Reset
reset.addEventListener("click", () => {
  display.innerHTML = 0;
  num = 0;
});
