// Array
let myArr = [1, 2, 3, 4, 5];
console.log(myArr);
console.log(myArr[0]); // 1

// Methods
myArr.push(6); // Push Add one or more Element at the end of an array
console.log("Push", myArr);

myArr.pop(); // Pop remove one element at the end of an array
console.log("Pop", myArr);

myArr.unshift(0); // Unshift Add one or more Element at the Start of an array
console.log("Unshift", myArr);

myArr.shift(); // shift Remove one element at the start of an array
console.log("Shift", myArr);

console.log(myArr.includes(1)); // True

// Slice And Splice
let myNewArr = [0, 1, 2, 3, 4, 5];
console.log(myNewArr);
console.log("Slice", myNewArr.slice(0, 3)); // Slice Return a copy of section of an array.
console.log(myNewArr);
console.log(myNewArr.splice(0, 3)); // Spilce Impact Orignal Array
console.log(myNewArr);

console.log(myNewArr.join()); // Join Convert Array Into String

let pkCeleb = ["Feroz Khan", "Danish Taimor", "Fahad Mustafa"];
let indiaCeleb = ["Salman Khan", "Sharukh Khan", "Ajay Devgan"];
// pkCeleb.push(indiaCeleb)
// console.log(pkCeleb);
// Concat
let allCeleb = pkCeleb.concat(indiaCeleb);
console.log("Concat", allCeleb);

// Spread Operator
let allNewCeleb = [...pkCeleb, ...indiaCeleb];
console.log("Spread Operator", allNewCeleb);

let nestedArr = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10], 11];
console.log(nestedArr);
let allArr = nestedArr.flat(Infinity);
console.log(allArr);

console.log(Array.isArray("Danish"));
console.log(Array.from("Danish")); // Create an Array from an iterable object

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Returns a new Array from a set of elements
