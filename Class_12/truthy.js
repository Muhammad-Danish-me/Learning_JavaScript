// Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// Truthy Values
// "0", 'False', "  ", [], {}, function(){}

const userEmail = "danish@gmail.com";

if (userEmail) {
  console.log(`Got user email`);
} else {
  console.log(`Don't Have user email`);
}

const emptyArray = [];
if (emptyArray.length === 0) {
  console.log(`Array is empty`);
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log(`object is empty`);
}

// nullish coalescing operator (??): null undefined
let val1;
// val1 = 5 ?? 10;
val1 = null ?? 5;

console.log(val1);

// ternary Operator
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log(`less than 80`) : console.log(`More than 80`);
