// Getting the DOM elements
let playerScore = 0;
let computerScore = 0;

const choices = document.getElementsByClassName("choices");
const pScore = document.getElementsByClassName("player-score");
const cScore = document.getElementsByClassName("computer-score");
const cpuChoice = document.getElementById("computer-choice");
const restartBtn = document.getElementById("restart");

// Function for computer to generate the random choices

const options = ["rock", "paper", "scissors"];
function computerPlay() {
    const computerIndex = Math.floor(Math.random() * 3);
    return options[computerIndex];
}

// Function for player to choose the option 

function playerPlay() {
    const playerChoice = this.id;
    const computerChoice= computerPlay();
    updateScore(playerChoice, computerChoice);
}

choices.forEach((choice) => choice.addEventListener("click", playerPlay));