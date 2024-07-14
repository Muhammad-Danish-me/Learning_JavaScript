// Numbers and Math
let score = 100;
console.log(score);

let number = new Number(200);
console.log(number);

let hundreds = 1000000;
console.log(hundreds.toLocaleString());

// ++++++++++++++++++++++++++++++   Math ++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.PI);
console.log(Math.E);
// console.log(Math.abs(-100));
// console.log(Math.abs(100));
console.log(Math.ceil(1.1)); // 2 always show up value
console.log(Math.ceil(1.9)); // 2
console.log(Math.floor(1.1)); // 1 always show down value
console.log(Math.floor(1.9)); // 1
console.log(Math.round(1.1)); // 1. if value less than 1.5 it's show 1 otherwise show 2
console.log(Math.round(1.9)); // 2  if value greater than or equal to 1.5 it's show 2
console.log(Math.min("10", "5", "9", "7", "2"));
console.log(Math.max("10", "5", "9", "7", "2"));
console.log(Math.random()); // 0.0 - 1.0, // It's gives Random Numbers between 0 - 1
console.log(Math.random() * 10); // 0.0 - 10.0,
console.log(Math.floor(Math.random() * 10 + 1)); // 1.0 - 11
