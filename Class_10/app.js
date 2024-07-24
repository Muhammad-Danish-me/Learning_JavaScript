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
