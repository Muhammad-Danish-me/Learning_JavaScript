// Class 1
// var, let and Const

// 1) Var

// var is a global variable
// var is function scoped and can be redeclared and updated
// example
var a = 10;
var a = 20; // redeclared
console.log(a); // output 20

// 2) let
// let is a local variable
// let is a block scoped variable and can not be redeclared, but can be updated
// example
let b = 10;
// let b = 20; // error, cannot redeclared
b = 20; // updates the value
console.log(b); // output 20

// 3) const
// const is a constant variable
// const is a block scoped variable and can not be redeclared or updated
// example
const c = 10;
// const c = 20; // error, cannot redeclared
c = 20; // error, cannot update
console.log(c); // error, cannot update, Assignment to constant variable.
