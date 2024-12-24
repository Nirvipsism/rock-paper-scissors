    function getComputerChoice() {
        let randomNum = Math.floor(Math.random() * 3);
        if (randomNum === 0) {
            return "Rock";
        } else if (randomNum === 1) {
            return "Paper";
        } else { 
            return "Scissors";
        }
    }   
    
    function getHumanChoice() {
        let userInput = prompt("Please enter your choice: rock, paper, or scissors.");
        if (userInput === null) {
            alert("Game canceled by the user.");
            return null;
        }
        userInput = userInput.toLowerCase().trim();
        if (userInput === "rock") {
            return "Rock";
        } else if (userInput === "paper") {
            return "Paper";
        } else if (userInput === "scissors") {
            return "Scissors";
        } else {
            alert("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.");
            return getHumanChoice();
        }
    }


// Function to play the entire game of 5 rounds
    function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // Function to play a single round
        function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! You both chose ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}.`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`);
        }
    }

    // Loop to play 5 rounds
    for (let round = 1; round <= 5; round++) {
        console.log(`\n--- Round ${round} ---`);
        let humanChoice = getHumanChoice();
        
        // If the user cancels the game, exit the loop
        if (humanChoice === null) {
            console.log("Game has been canceled.");
            return;
        }

        let computerChoice = getComputerChoice();
        console.log("Computer chose: " + computerChoice);

        playRound(humanChoice, computerChoice);
        console.log(`Current Scores => You: ${humanScore}, Computer: ${computerScore}`);
    }

    // Determine and announce the overall winner
    console.log("\n--- Game Over ---");
    if (humanScore > computerScore) {
        console.log(`You are the overall winner! Final Scores => You: ${humanScore}, Computer: ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`The computer wins the game! Final Scores => You: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`The game is a tie! Final Scores => You: ${humanScore}, Computer: ${computerScore}`);
    }
}

// Start the game
playGame();