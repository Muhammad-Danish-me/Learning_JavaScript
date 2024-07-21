// Functions
function sayMyName() {
  console.log("D");
  console.log("A");
  console.log("N");
  console.log("I");
  console.log("S");
  console.log("H");
}
sayMyName(); // Call the function

function addTwoNumber(number1, number2) {
  console.log(number1 + number2);
}
let total = addTwoNumber(2, 3);
console.log(total); // undefined

function addNumber(num1, num2) {
  let result = num1 + num2;
  return result;
}

const result = addNumber(5, 5);
console.log("Result: ", result);

function loginUserMessage(username) {
  if (username) {
    return `${username} Just Logged in`;
  } else {
    console.log("Please Enter Username");
  }
}
let loginMessage = loginUserMessage("Danish");
console.log(loginMessage);
