// Dom
let h1 = document.getElementById("title");

console.log(h1.id);
console.log(h1.className);
console.log(h1.getAttribute("id"));
console.log(h1.setAttribute("class", "hello")); // it's overwrite class which is before assign
console.log(h1);
h1.style.backgroundColor = "green";
h1.style.borderRadius = "15px";
h1.style.padding = "15px";
console.log("inner Text: >", h1.innerText); // it's give value which is display on browser
console.log("Text Content: >", h1.textContent); // it's give value which is display browser or hide
console.log("inner HTML: >", h1.innerHTML); // it's give  value with html tags if it's have

let title = document.querySelector("h2"); // it's give just one h2 which is available first
console.log(title);
title = document.querySelectorAll("h2"); // it's give all h2
console.log(title);

title = document.querySelector("#title");
console.log(title);

const myUl = document.querySelector("ul");
console.log(myUl);
const turnGreen = myUl.querySelector("li");
console.log(turnGreen);
turnGreen.style.backgroundColor = "green";

turnGreen.innerText = "five";

const myH1 = document.querySelectorAll("h1");
console.log(myH1);
myH1[0].style.backgroundColor = "yellow";
myH1[0].style.color = "black";

const myH2 = document.querySelectorAll("h2");

console.log(myH2);
myH2.forEach((h) => {
  h.style.backgroundColor = "yellow";
  h.style.color = "black";
  h.style.padding = "10px";
  h.style.borderRadius = "15px";
});

const myPara = document.querySelector("p");
myPara.style.backgroundColor = "yellow";
myPara.style.color = "black";
myPara.style.padding = "10px";
myPara.style.borderRadius = "15px";

const mylist = document.querySelectorAll("li");
console.log(mylist);
mylist.forEach((l) => {
  l.style.backgroundColor = "yellow";
  l.style.color = "black";
  l.style.padding = "10px";
  l.style.borderRadius = "15px";
});

const listItem = document.getElementsByClassName("list-item");
console.log(listItem);

const myConvertedArray = Array.from(listItem);

console.log(myConvertedArray);
myConvertedArray.forEach((li) => {
  // console.log(li)
  li.style.fontSize = "2em";
});

myConvertedArray.map((li) => {
  // console.log(li)
  li.style.color = "red";
});
