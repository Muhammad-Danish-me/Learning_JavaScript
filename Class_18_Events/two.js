let image = document.getElementById("img");
let zoomIn = document.getElementById("zoomIn");
let zoomOut = document.getElementById("zoomOut");

zoomIn.addEventListener("click", (e) => {
  image.style.zoom = "4";
});
zoomOut.addEventListener("click", (e) => {
  image.style.zoom = "1";
});
