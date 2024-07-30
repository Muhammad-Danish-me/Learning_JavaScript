const parent = document.querySelector(".parent");
console.log(parent);
console.log(parent.children);
console.log(parent.children[0]);
console.log(parent.children[2]);
console.log(parent.children[2].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML);
}
