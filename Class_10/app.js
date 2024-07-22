// This and Arrow functions
const user = {
  userName: "Danish",
  price: 199,
  welcomeMessage: function () {
    console.log(`${this.userName}, Welcome to Website `);
  },
};
user.welcomeMessage();
user.userName = "Hammad";
user.welcomeMessage();
