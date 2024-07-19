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
  course: "WMA"
};
console.log(students.studentFullName.firstName)
console.log(students.studentFullName.lastName)
