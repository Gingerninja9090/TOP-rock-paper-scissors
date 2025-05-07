
// Random number generator //

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100)
    let answer = ""

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

// Set inital scores //

let humanScore = 0
let computerScore = 0

// Single round play function //

function playRound() {
    let humanChoice = gethumanChoice
    let computerChoice = getComputerChoice();

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

    const hscore = document.querySelector("#hscore");
    hscore.innerHTML = humanScore;

    const cscore = document.querySelector("#cscore");
    cscore.innerHTML = computerScore;

    if (humanScore === 5) {
        humanScore = 0
        computerScore = 0
        alert ('Player has won the game!!')
        const hscore = document.querySelector("#hscore");
        hscore.innerHTML = humanScore;
    
        const cscore = document.querySelector("#cscore");
        cscore.innerHTML = computerScore;
    }
    else if (computerScore === 5) {
        humanScore = 0
        computerScore = 0
        alert ('Computer has won the game!!')
        const hscore = document.querySelector("#hscore");
        hscore.innerHTML = humanScore;
    
        const cscore = document.querySelector("#cscore");
        cscore.innerHTML = computerScore;
    }
}

// DOM UI button attachment //

const selection = document.querySelector("body");

const btnPaper = document.createElement("button");
btnPaper.textContent = "Paper";

const btnRock = document.createElement("button");
btnRock.textContent = "Rock";

const btnScissor = document.createElement("button");
btnScissor.textContent = "Scissor";

selection.appendChild(btnPaper);
selection.appendChild(btnRock);
selection.appendChild(btnScissor);

// Function added to DOM buttons to play round based on users choice //

btnPaper.addEventListener('click', () => {
    return gethumanChoice = "paper",
    playRound()
});
btnRock.addEventListener('click', () => {
    return gethumanChoice = "rock",
    playRound()
});
btnScissor.addEventListener('click', () => {
    return gethumanChoice = "scissors",
    playRound()
});