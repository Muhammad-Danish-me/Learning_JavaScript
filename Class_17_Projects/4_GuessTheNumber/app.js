const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const preGueses = document.querySelector(".guesses");
const remainGuess = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
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

function validateGuess(guess) {}
function checkGuess(guess) {}

function displayGuess(guess) {}

function displayMessage(message) {}

function endGame() {}

function newGame() {}
