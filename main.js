let playerMove = ["rock", "paper", "scissors"];
let computerMove = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;

function rockPaperScissors () {
    const userName = prompt("Please enter your name.")
}

const playAgain = true;

if (playerMove.includes("rock", "paper", "scissors") && computerMove.includes("rock", "paper", "scissors")) {

    while (playAgain) {
    if (playerMove === computerMove) { // change 'Player' to userName ${}
        console.log("It's a tie!");
    } else if (playerMove === "rock" && computerMove === "scissors") {
        console.log("Player wins!") 
        playerScore++;
        computerScore--;
    } else if (computerMove === "rock" && playerMove === "scissors") {
        console.log("Computer wins!");
        playerScore--;
        computerScore++;
    } else if (playerMove === "rock" && computerMove === "paper") {
        console.log("Computer wins!");
        playerScore--;
        computerScore++;
    } else if (computerMove === "rock" && playerMove === "paper") {
        console.log("Player wins!");
        playerScore++;
        computerScore--;
    } else if (playerMove === "paper" && computerMove === "scissors") {
        console.log("Computer wins!");
        playerScore--;
        computerScore++;
    } else if (computerMove === "paper" && playerMove === "scissors") {
        console.log("Player wins!"); 
        playerScore++;
        computerScore--;
    }
  }
} else {
    alert("Only 'rock', 'paper' or 'scissors' is allowed!");
}







/* function rockPaperScissors() {
    let userName;
    while (userName && userName.length <= 10) {
        userName = prompt("Please enter your name.")
    } if (userName && userName.length <= 10) {
        prompt("Your name cannot be more than 10 characters.")
    }
} alert(`Hello, ${userName}`)

rockPaperScissors(); */

/* function askName() {
    const userName = prompt("Please enter your name")

    if (userName && userName.length <= 10) { // testing to see how long the username is (needs to be less than 10)
        alert(`Hello, ${userName}`)
    } else {
        prompt("Your name cannot be more than 10 characters")
        return null;
    } 
}

askName()
*/ 
