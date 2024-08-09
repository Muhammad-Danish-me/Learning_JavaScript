let userInput = document.getElementById("input");
let addTask = document.querySelector("#addTask");
let tasks = document.querySelector(".tasks");
let p = document.createElement("p");

addTask.addEventListener("click", (e) => {
  let userValue = userInput.value;
  if (userValue === "") {
    alert("Please Enter Task");
  } else {
    tasks.innerHTML += `<h3>${userValue} </h3>`;

    userInput.value = "";
  }
});
