// A while loop that starts as true so the game will play once.
let playAgain = true;
let wins = 0;
let losses = 0;
let draws = 0;

function playerName() {
    let userName = prompt("Please enter your name.")
    while (userName.length > 10) {
       userName = prompt("Your name cannot be more than 10 characters.")
    }
    alert(`Hello, ${userName}`);

} 
playerName();

while(playAgain === true){

//Automatically turns player input into lowercase
let playerMove = prompt("rock, paper or scissors?").toLowerCase(); 
let computerMove ;

// To randomly generate a number for computer move and assign
const randomNumber =  Math.floor(Math.random() *3+1);  
if (randomNumber === 1){
    computerMove = "paper";
}
else if (randomNumber === 2){
    computerMove = "rock";
}
else if (randomNumber === 3){
    computerMove = "scissors";
}
// console.log(computerMove);    
//this shows the computerMove is being randomly generated

function getWinner(playerMove, computerMove) { 
    if (playerMove === computerMove) { //change 'Player' to userName ${}
        alert("It's a tie!");
        draws++;
        return 0;
    } else if (playerMove === "rock" && computerMove === "scissors") {
        alert("Player wins!"); 
        wins++;
        return 1;
    } else if (computerMove === "rock" && playerMove === "scissors") {
        alert("Computer wins!");
        losses++;
        return -1;
    } else if (playerMove === "rock" && computerMove === "paper") {
        alert("Computer wins!");
        losses++;
        return -1;
    } else if (computerMove === "rock" && playerMove === "paper") {
        alert("Player wins!");
        wins++;
        return 1;
    } else if (playerMove === "paper" && computerMove === "scissors") {
        alert("Computer wins!");
        losses++;
        return -1;
    } else if (computerMove === "paper" && playerMove === "scissors") {
        alert("Player wins!"); 
        wins++;
        return 1;
    }
     else {
    console.log("Only rock, paper or scissors is allowed!");
    }
}

//checks the outcome and stores result in result variable 
let result = getWinner(playerMove, computerMove);


switch (result) { //insert username ${}
    case 1:
        alert(`You chose ${playerMove}. Computer chose ${computerMove}. You win 1 point`);
        break;
    case 0:
        alert(`You chose ${playerMove}. Computer chose ${computerMove}. You get 0 points`);
        break;
    case -1:
        alert(`You chose ${playerMove}. Computer chose ${computerMove}. 1 point to the computer`);
        break;
    default:
        alert("Only rock, paper, or scissors is allowed!");
}

// Gives player option to either continue or stop.
playAgain = confirm("Do you want to play again?");
}

// These need global variable
if(playAgain === false) {
alert(`Game over. Here are the results: Wins: ${wins}, Draws: ${draws}, Losses: ${losses}`);
    }
