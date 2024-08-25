function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increament = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

const chai = new createUser("Chai", 30);
chai.printMe();

let myName = "Danish";

console.log(myName.trim().length);

Object.prototype.trueLenght = function () {
  console.log(`the lenght of ${this.trim().length}`);
};

"hammad    ".trueLenght();
"Bahsir Ahmed".trueLenght();
