// for of

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

const greeting = "Hello World!";
for (const greet of greeting) {
  if (greet === " ") {
    continue;
  }
  console.log(`The Char of ${greet}`);
}

// Map

const map = new Map();
map.set("PK", "Pakistan");
map.set("USA", "United states of america");
map.set("Fr", "France");
map.set("PK", "Pakistan");

console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

// For in loop
const myObject = {
  js: "javascript",
  py: "phyton",
  cpp: "c++",
  rb: "ruby",
};

for (const key in myObject) {
  console.log(`${key} Shortcut is for ${myObject[key]}`);
}

const programming = ["js", "py", "rb", "cpp"];

for (const key in programming) {
  console.log(programming[key]);
}
