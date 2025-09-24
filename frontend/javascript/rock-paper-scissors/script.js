// DOM elements
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const replayBtn = document.getElementById("replay-btn");
const gameMessageEl = document.getElementById("game-message");
const choiceHeading = document.getElementById("choice-heading");

// Game variables
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// Random computer choice
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Play one round
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  let message = `Player chose: ${playerChoice} <br>Computer chose: ${computerChoice} <br>`;

  // Determine winner of the round
  if (playerChoice === computerChoice) {
    message += "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    message += "Player wins this round!";
    playerScore++;
  } else {
    message += "Computer wins this round!";
    computerScore++;
  }

  // Update scores
  playerScoreEl.innerText = playerScore;
  computerScoreEl.innerText = computerScore;
  gameMessageEl.innerHTML = message;

  // End game if someone reaches 3 points
  if (playerScore === 3 || computerScore === 3) {
    message += `<br>${playerScore === 3 ? "Player" : "Computer"} wins the game!`;
    gameMessageEl.innerHTML = message;

    // Hide choice buttons and heading
    rockBtn.style.display = "none";
    paperBtn.style.display = "none";
    scissorsBtn.style.display = "none";
    choiceHeading.style.display = "none";

    // Show replay button
    replayBtn.style.display = "inline-flex";
  }
}

// Reset game
replayBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.innerText = playerScore;
  computerScoreEl.innerText = computerScore;

  gameMessageEl.innerHTML = "";
  replayBtn.style.display = "none";

  rockBtn.style.display = "inline-flex";
  paperBtn.style.display = "inline-flex";
  scissorsBtn.style.display = "inline-flex";
  choiceHeading.style.display = "block";
});

// Event listeners for choices
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));
