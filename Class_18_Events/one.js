document.getElementById("owl").onclick = function () {
  //   console.log("owl Clicked");
};

// attachEvent
// jQuery - on

// type, timeStamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY,
// altKey, ctrlKey, shiftKey, keycode

// Event Bubbling -> default False
// Event Capturing -> top to bottom

document.getElementById("images").addEventListener(
  "click",
  () => {
    console.log("clicked inside the ul");
  },
  false
);
document.getElementById("owl").addEventListener(
  "click",
  (e) => {
    console.log("owl Clicked");
    // e.stopPropagation();
  },
  false
);

document.getElementById("google").addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  console.log("Clicked Google");
});

const images = document.querySelector("#images");
images.addEventListener("click", (e) => {
  console.log(e.target.parentNode);
  if (e.target.tagName === "IMG") {
    let removeIt = e.target.parentNode;
    removeIt.remove();
  }
});
// images.firstChild
