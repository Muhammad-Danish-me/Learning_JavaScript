const users = {
  username: "Danish",
  loginCount: 4,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user Details");
    console.log(this.username);
  },
};
console.log(users);
console.log(users.username);
console.log(users.getUserDetails());

//

function user(username, loginCount, isLogedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLogedIn = isLogedIn;

  return this;
}
const user1 = new user("Danish", 4, true);
const user2 = new user("hammad", 5, false);

console.log(user1);
console.log(user2);
console.log(user1 instanceof user);
