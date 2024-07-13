// class 2 Datatypes
// 1. Primitive Datatypes
//  string
let name = "Danish";

//  number
let num = 10;

//  boolean
// let isLogin = true/false

//  undefined
let age;
//  null
// symbol
// 2. Non-Primitive Datatypes
//  object
let obj = {
  name: "Danish",
  age: 18,
};
//  array
var days = ["Monday", "Tuesday", "Wednesday"];
//  function
let myFunc = function () {
  console.log("Hello");
};

// check Data type
console.log(typeof name); // string
console.log(typeof num); // number
console.log(typeof age); // undefined
console.log(typeof obj); // Object
console.log(typeof days); // Object
console.log(typeof myFunc); // function

// arithmetic operators
// + => addition
// - => subtraction
// * => multiplication
// / => division
// % => Modulus

// comparison operators
// == => equal to   // double equal to just check value
console.log(1 == 1); // True
console.log(1 == "1"); // True
// === => triple equal to  // triple equal to check value and Data type
console.log(1 === 1); // True
console.log(1 === "1"); // False
// != => not equal to
console.log(1 != 1); // False
console.log(1 != "1"); // False
// > => greater than
console.log(1 > 1); // False
// < => less than
console.log(1 < 1); // False
// >= => greater than or equal to
console.log(1 >= 1); // True
// <= => less than or equal to
console.log(1 <= 1); // True
