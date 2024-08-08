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
  () => {
    console.log("owl Clicked");
  },
  false
);
