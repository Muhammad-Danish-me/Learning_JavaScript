// Objects
let userData = {
  name: "Danish",
  age: "18",
  email: "danish@google.com",
  city: "karachi",
  number: "03xxxxx",
};
console.log(userData);
console.log(userData.name);
userData.email = "danish@yahoo.com";
console.log(userData);
Object.freeze(userData);
userData.name = "Hammad";
console.log(userData);
