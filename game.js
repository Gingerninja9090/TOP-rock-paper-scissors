console.log("Hello World")

// Get computer choice
 //   Randomly generates a number
 //   If less than or equal to 33 then rock
 //   If less than or equal to 66 and greater than 33 then paper
 //   If less than or equal to 99 and greater than 66 then scissors

let randomNumber = Math.floor(Math.random() * 100); // Number range is 0 to 99

let getComputerChoice = " "; // Computers choice
    if (randomNumber <= 99 && randomNumber > 66) {
        getComputerChoice = "Scissors"
    }
    else if (randomNumber <= 66 && randomNumber > 33 ) {
        getComputerChoice = "Paper"
    }
    else if (randomNumber <= 33) {
        getComputerChoice = "Rock"
    }

console.log(randomNumber)
console.log(getComputerChoice)