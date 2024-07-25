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
