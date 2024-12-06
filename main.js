// A while loop that starts as true so the game will play once.
let playAgain = true;
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
        console.log("It's a tie!");
        return 0;
    } else if (playerMove === "rock" && computerMove === "scissors") {
        alert("Player wins!") 
        return 1;
    } else if (computerMove === "rock" && playerMove === "scissors") {
        alert("Computer wins!");
        return -1;
    } else if (playerMove === "rock" && computerMove === "paper") {
        alert("Computer wins!");
        return -1;
    } else if (computerMove === "rock" && playerMove === "paper") {
        alert("Player wins!");
        return 1;
    } else if (playerMove === "paper" && computerMove === "scissors") {
        alert("Computer wins!");
        return -1;
    } else if (computerMove === "paper" && playerMove === "scissors") {
        alert("Player wins!"); 
        return 1;
    }
     else {
    console.log("Only rock, paper or scissors is allowed!");
    return null;
    }
}

//checks the outcome and stores result in result variable 
let result = getWinner(playerMove, computerMove);



switch (result) { //inser username ${}
    case 1:
        alert(`you chose ${playerMove}. Computer chose ${computerMove}. You win! (1)`);
        break;
    case 0:
        alert(`You chose ${playerMove}. Computer chose ${computerMove}. It's a tie! (0)`);
        break;
    case -1:
        alert(`You chose ${playerMove}. Computer chose ${computerMove}. You lose! (-1)`);
        break;
    default:
        alert("Only rock, paper, or scissors is allowed!");
}

// Gives player option to either continue or stop.
playAgain = confirm("Do you want to play again?");
}

// These need global variable
if(!playAgain) {
alert(`Game over. Here are the results ${win} ${tie} ${lose}`);
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
