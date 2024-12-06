// let playerMove = "scissors";
// let computerMove = "rock";

// let result = getWinner("", "paper")
// console.log(result); 

let playerMove = prompt("rock, paper or scissors?").toLowerCase(); //automatically turns player input into lowercase
let computerMove ;

const randomNumber =  Math.floor(Math.random() *3+1);  // to randomly generate a number for computer move and assign
if (randomNumber === 1){
    computerMove = "paper";
}
else if (randomNumber === 2){
    computerMove = "rock";
}
else if (randomNumber === 3){
    computerMove = "scissors";
}
// console.log(computerMove);    //this shows the computerMove is being randomly generated


function getWinner(playerMove, computerMove) { 
    if (playerMove === computerMove) { // change 'Player' to userName ${}
        console.log("It's a tie!");
        return 0;
    } else if (playerMove === "rock" && computerMove === "scissors") {
        console.log("Player wins!") 
        return 1;
    } else if (computerMove === "rock" && playerMove === "scissors") {
        console.log("Computer wins!");
        return -1;
    } else if (playerMove === "rock" && computerMove === "paper") {
        console.log("Computer wins!");
        return -1;
    } else if (computerMove === "rock" && playerMove === "paper") {
        console.log("Player wins!");
        return 1;
    } else if (playerMove === "paper" && computerMove === "scissors") {
        console.log("Computer wins!");
        return -1;
    } else if (computerMove === "paper" && playerMove === "scissors") {
        console.log("Player wins!"); 
        return 1;
    }
     else {
    console.log("Only rock, paper or scissors is allowed!");
    return null;
    }
}

let result = getWinner(playerMove, computerMove);

// checks the outcome and stores result in result variable 


switch (result) { // inser username ${}
    case 1:
        alert("You win! (1)");
        break;
    case 0:
        alert("It's a tie! (0)");
        break;
    case -1:
        alert("You lose! (-1)");
        break;
    default:
        alert("Only rock, paper, or scissors is allowed!");
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
