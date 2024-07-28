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

// for each
const coding = ["js", "ruby", "python", "cpp", "java"];

coding.forEach(function (ele) {
  console.log(ele);
});

coding.forEach((items) => {
  console.log("Arrow function", items);
});

const heros = ["flash", "batman", "superman"];
function printMe(elements) {
  console.log(elements);
}
heros.forEach(printMe);

const countries = [
  "Pakistan",
  "America",
  "China",
  "Bangladesh",
  "France",
  "Germany",
  "Japan",
];
coding.forEach((elements, index, array) => {
  console.log(elements, index, array);
});

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "ruby",
    languageFileName: "rb",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];
myCoding.forEach((items) => {
  console.log(items.languageName, "->", items.languageFileName);
});

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

