
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

let humanScore = 0
let computerScore = 0

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

    console.log('Player Choice: ' + humanChoice)
    console.log('Computer Choice ' + computerChoice)
    console.log('Player Score: ' + humanScore)
    console.log('Computer Score: ' + computerScore)
}

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

const score = document.querySelector("div");

const scoreHuman = document.createElement("p");
scoreHuman.textContent = ("Human Score: " + humanScore);

const scoreComputer = document.createElement("p");
scoreComputer.textContent = ("Computer Score: " + computerScore);

score.appendChild(scoreHuman);
score.appendChild(scoreComputer);