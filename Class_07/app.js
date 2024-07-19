// Objects
let userData = {
  name: "Danish",
  "full name": "Muhammad Danish",
  age: "18",
  email: "danish@google.com",
  city: "karachi",
  number: "03xxxxx",
};
console.log(userData);
console.log(userData.name);
userData.email = "danish@yahoo.com";
console.log(userData);
// Object.freeze(userData);
userData.name = "Hammad";
console.log(userData);
console.log(userData["full name"]);

userData.greeting = function () {
  console.log("Hello Js User");
};
userData.greetingTwo = function () {
  console.log(`Hello Js User ${this.name}`);
};
console.log(userData.greeting());
console.log(userData.greetingTwo());

const students = {
  id: "123abc",
  studentFullName: {
    firstName: "Muhammad",
    lastName: "Danish",
  },
  course: "WMA",
};
console.log(students.studentFullName.firstName);
console.log(students.studentFullName.lastName);

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "e", 6: "f" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign(obj1,obj2)
const obj3 = { ...obj1, ...obj2 }; // Spread Operator

console.log(obj3);
