// Select the buttons
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

// Select the div for displaying results
const resultsDiv = document.getElementById("results");

// Global score tracking
let humanScore = 0;
let computerScore = 0;
// We'll use this flag to lock the game once someone hits 5 points
let gameOver = false;

// Function that returns "Rock", "Paper", or "Scissors" randomly
function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return "Rock";
  } else if (randomNum === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// Function that plays a single round of Rock Paper Scissors
function playRound(playerSelection) {
  // If the game has already ended (someone reached 5 points), do nothing.
  if (gameOver) return;

  // Get the computer's random choice
  const computerSelection = getComputerChoice();

  // Determine the round result: "tie", "win", or "lose"
  const result = determineWinner(playerSelection, computerSelection);

  // Update scores based on the result
  updateScore(result);

  // Display the round outcome and current score to the user
  displayRoundResult(playerSelection, computerSelection, result);

  // Check if anyone reached 5 points; if so, end the game
  checkForGameOver();
}

// Helper function to compare player vs. computer choices
function determineWinner(playerSelection, computerSelection) {
  // Convert both choices to lowercase for easier comparison
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  // Compare
  if (player === computer) {
    return "tie";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

// Updates global scores
function updateScore(result) {
  if (result === "win") {
    humanScore++;
  } else if (result === "lose") {
    computerScore++;
  }
  // If it's a tie, no score change
}

// Display round result and score in the HTML
function displayRoundResult(playerSelection, computerSelection, result) {
  let message = "";

  if (result === "tie") {
    message = `It's a tie! You both chose ${playerSelection}.`;
  } else if (result === "win") {
    message = `You win this round! ${playerSelection} beats ${computerSelection}.`;
  } else if (result === "lose") {
    message = `You lose this round! ${computerSelection} beats ${playerSelection}.`;
  }

  // Build the output text, including current score
  const scores = `Score => You: ${humanScore}, Computer: ${computerScore}`;

  // Update the 'resultsDiv' element in the DOM
  resultsDiv.innerHTML = `<p>${message}</p><p>${scores}</p>`;
}

// Checks if the game is over (i.e., if someone reached 5 points)
function checkForGameOver() {
  if (humanScore === 5 || computerScore === 5) {
    gameOver = true;
    let winner = humanScore === 5 ? "You" : "Computer";
    // Append the final winner announcement to the current results
    resultsDiv.innerHTML += `<p><strong>${winner} won the game!</strong></p>`;
  }
}

// Add event listeners to each button
rockBtn.addEventListener("click", () => playRound("Rock"));
paperBtn.addEventListener("click", () => playRound("Paper"));
scissorsBtn.addEventListener("click", () => playRound("Scissors"));