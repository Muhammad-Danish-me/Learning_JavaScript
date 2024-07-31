const myDiv = document.createElement("div");
console.log(myDiv);

myDiv.className = "main";
myDiv.id = "box";
myDiv.setAttribute("title", "Generated title");
myDiv.style.backgroundColor = "yellow";
myDiv.style.color = "black";
// myDiv.innerText = "Hello World";
const addText = document.createTextNode("Muhammad Danish");
myDiv.appendChild(addText);
document.body.appendChild(myDiv);

myDiv.style.fontSize = "30px";
myDiv.style.fontWeight = "bold";

