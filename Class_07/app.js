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
let mobilephones = {
  iphone: {
    iphone11: {
      company: "Apple",
      model: "Iphone 11",
      ram: "8gb",
      rom: "256gb",
      chargingPort: "C-type",
      price: "77,000 PKR",
      color: "Black",
      image: "images/Iphone 11.jpeg",
    },
    iphone12: {
      company: "Apple",
      model: "Iphone 12",
      ram: "8gb",
      rom: "256gb",
      chargingPort: "C-type",
      price: "100,000 PKR",
      color: "Blue",
      image: "images/Iphone 12.jpg",
    },
  },
  Samsung: {
    galaxy_A13: {
      company: "Samusng",
      model: "Samsung A13",
      ram: "8gb",
      rom: "256gb",
      chargingPort: "C-type",
      price: "50,000 PKR",
      color: "Grey",
      image: "images/samsung a13.jpeg",
    },
    galaxy_S20: {
      company: "Samsung",
      model: "Samsung S20",
      ram: "8gb",
      rom: "256gb",
      chargingPort: "C-type",
      price: "120,000 PKR",
      color: "Dark Blue",
      image: "images/Iphone 12.jpg",
    },
  },
  infinix: {
    hot_40_Pro: {
      company: "Infinix",
      model: "infinix Hot 40 Pro",
      ram: "8gb",
      rom: "256gb",
      chargingPort: "C-type",
      price: "45,499 PKR",
      color: "Blue",
      image: "images/Iphone 12.jpg",
    },
    note_30: {
      company: "infinix",
      model: "Infinix Note 30",
      ram: "8gb",
      rom: "256gb",
      chargingPort: "C-type",
      price: "43,799 PKR",
      color: "Red",
      image: "images/Iphone 12.jpg",
    },
  },
};
console.log(mobilephones);

const car = { type: "Fiat", model: "500", color: "white" };
console.log(car.color);
console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));

console.log(car.hasOwnProperty("color"));
console.log(car.hasOwnProperty("horsePower"));

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
