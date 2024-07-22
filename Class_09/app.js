// Global and local scope in javascript

var a = 10;
let b = 20;
const c = 30;
if (true) {
  var a = 100;
  let b = 200;
  const c = 300;
  // console.log("Inner", a);
  // console.log("Inner", b);
  // console.log("Inner", c);
}
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const userName = "Danish";
  function two() {
    const website = "Youtube";
    console.log(userName);
  }
  // console.log(website);
  two();
}
// console.log(userName)
one();
// ******************  Hoisting Concept

console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

// console.log(addTwo(5)) Error, Cannot access 'addTwo' before initialization
const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(5));
