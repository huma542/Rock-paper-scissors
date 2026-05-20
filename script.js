console.log('Game loaded');

const buttons = document.querySelectorAll(".btn");
const yourChoiceSpan = document.getElementById("your-choice");
const computerChoiceSpan = document.getElementById("computer-choice");
const playAgainBtn = document.getElementById("play-again");
const computerScoreSpan = document.getElementById("computer-score");
const playerScoreSpan = document.getElementById("player-score");
const resultP = document.getElementById("result");

let playerScore = 0;
let computerScore = 0;
const WINNING_SCORE = 5;

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    if (playerScore >= WINNING_SCORE || computerScore >= WINNING_SCORE) return;

    const choice = e.currentTarget.dataset.choice;
    yourChoiceSpan.textContent = choice;

    const computerChoice = getComputerChoice();
    computerChoiceSpan.textContent = computerChoice;

    playRound(choice, computerChoice);
    checkGameOver();
  });
});

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(player, computer) {
  if (player === computer) {
    resultP.textContent = "It's a tie!";
    return;
  }

  const winConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  };

  if (winConditions[player] === computer) {
    playerScore++;
    playerScoreSpan.textContent = playerScore;
    resultP.textContent = "You win this round!";
  } else {
    computerScore++;
    computerScoreSpan.textContent = computerScore;
    resultP.textContent = "Computer wins this round!";
  }
}

function checkGameOver() {
  if (playerScore === WINNING_SCORE) {
    resultP.textContent = "You win the game!! 🎉";
    buttons.forEach(btn => btn.disabled = true);
  } else if (computerScore === WINNING_SCORE) {
    resultP.textContent = "Computer wins the game!! 🤖";
    buttons.forEach(btn => btn.disabled = true);
  }
}

playAgainBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpan.textContent = 0;
  computerScoreSpan.textContent = 0;
  yourChoiceSpan.textContent = "-";
  computerChoiceSpan.textContent = "-";
  resultP.textContent = "";
  buttons.forEach(btn => btn.disabled = false);
});