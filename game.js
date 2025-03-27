// Get computer choice
 // Randomly generates a number
 // If less than or equal to 33 then rock
 // If less than or equal to 66 and greater than 33 then paper
 // If less than or equal to 99 and greater than 66 then scissors

let randomNumber = Math.floor(Math.random() * 100); // Number range is 0 to 99

console.log(randomNumber) //Outputs random number

let getComputerChoice = " "; // Computers choice
    if (randomNumber <= 99 && randomNumber > 66) {
        getComputerChoice = "scissors"
    }
    else if (randomNumber <= 66 && randomNumber > 33 ) {
        getComputerChoice = "paper"
    }
    else if (randomNumber <= 33) {
        getComputerChoice = "rock"
    }

console.log(getComputerChoice) //Outputs computers choice

// Get human choice
 // Display prompt with question and text input
 // Return users input

 let getHumanChoice = prompt("Pick from rock, paper or scissors").toLowerCase()

 console.log(getHumanChoice)

// Get score for players
 // Set player score
 // Set computers score

let humanScore = 0
let computerScore = 0

console.log(humanScore)
console.log(computerScore)

// Play round of game
 // Function to activate human and computer choice
 // Compare outputs and declare a winner
 // increase winner score

 function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return prompt("Its a tie!!")
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return humanScore ++,
        console.log("Human Wins Round!")
    }
    else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) { return computerScore ++,
        console.log("Computer Wins Round!")
    }
 }

 // Play game of rock, paper & scissors
  // Function needed to call playround
  // Track score for 5 rounds and declare a winner

function playGame() {
    for (let i = 0; i <= 5; i++) {
        const humanSelection = getHumanChoice;
        const computerSelection = getComputerChoice;
        playRound(humanSelection, computerSelection);
    }
    let finalScore;
    if (humanScore > computerScore) {
        
    }
}
