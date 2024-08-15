const user = {
  username: "Danish",
  loginCount: 4,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user Details");
  },
};
console.log(user);
console.log(user.username);
console.log(user.getUserDetails());
