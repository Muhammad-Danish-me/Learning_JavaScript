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
console.log(h1.innerHTML)