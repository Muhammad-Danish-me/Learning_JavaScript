// This and Arrow functions
const user = {
  userName: "Danish",
  price: 199,
  welcomeMessage: function () {
    console.log(`${this.userName}, Welcome to Website `);
    // console.log(this)
  },
};
user.welcomeMessage();
user.userName = "Hammad";
user.welcomeMessage();

console.log(this);

function myFunc() {
  console.log(this);
}
myFunc();

// Arrow Function

// () => {

// }

const arrowFunc = (num1, num2) => {
  return num1 + num2;
};
console.log(arrowFunc(2, 2));

// const arrowFunc2 = (num1, num2) => (num1 + num2);
const arrowFunc2 = (num1, num2) => num1 + num2;

console.log(arrowFunc2(2, 5));
