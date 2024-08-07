const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remainGuess = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let preGuess = [];
let numOfGuess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a Valid Number");
  } else if (guess < 1) {
    alert("Please Enter a Number More Than 1");
  } else if (guess > 100) {
    alert("Please Enter a Number less Than 100");
  } else {
    preGuess.push(guess);
    if (numOfGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over, Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {}

function displayGuess(guess) {}

function displayMessage(message) {}

function endGame() {}

function newGame() {}
