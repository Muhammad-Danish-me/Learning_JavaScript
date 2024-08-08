let image = document.getElementById("img");

image.addEventListener("mouseover", () => {
  image.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJCR5fHl4cYX9rp_FhQt8DqJT5045u9HTIw&s";
  image.title = "Lahore";
});
image.addEventListener("mouseleave", () => {
  image.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNztRhu5bz03ZIuir9ycB0EaLUV0LZtoPVPw&s";
  image.title = "Karachi";
});
