// Get computer choice
 // Randomly generates a number
 // Function for get choice
  // If less than or equal to 99 and greater than 66 then scissors
  // If less than or equal to 66 and greater than 33 then paper
  // If less than or equal to 33 then rock

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100)
    let answer = ""

    console.log(randomNumber)

    if (randomNumber <= 99 && randomNumber > 66) {
        return answer = 'scissors'
    }
    else if (randomNumber <= 66 && randomNumber > 33) {
        return answer = 'paper'
    }
    else if (randomNumber <= 33){
        return answer = 'rock'
    } 

    return answer
}

// Get human choice
 // Function for get choice
  // prompt with question + text input.lowercase all text

function getHumanChoice() {
    return prompt('Select rock, paper or scissors to play.').toLowerCase()
}

// Get scores
 // Set player score = 0
 // Set computers score = 0

let humanScore = 0
let computerScore = 0

// Play round of game
 // Function to compare player and computer choices
  // If tie then alert users tied
  // If player wins increase score and alert player wins
  // If computer wins increase score and alert computer wins

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert('Its a tie!')
    }
    else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') 
    ) {
        humanScore ++,
        alert('Player Wins Round!')
    }
    else {
        computerScore ++,
        alert('Computer Wins Round!')
    }

    console.log('Player Score: ' + humanScore)
    console.log('Computer Score: ' + computerScore)
}

 // Play game of rock, paper & scissors
  // Function to call play round funtion 5 times and keep score
   // Create loop to repeat 5 times
   // Add activation of function play round
   // Winner choice
    // If player score equal computer score return alert its a tie
    // If player score greater computer score return alert player wins
    // If player score less computer score return alert computer wins

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice()
        console.log('Player Uses: ' + humanSelection)
        const computerSelection = getComputerChoice()
        console.log('Computer Uses: ' + computerSelection)
        playRound(humanSelection, computerSelection)
    }
    if (humanScore === computerScore) {
        alert('Everyone loses (Its a tie!)')
    }
    else if (humanScore > computerScore) {
        alert('Player Wins Game!')
    }
    else {
        alert('Computer Wins Game!')
    }
}

playGame()