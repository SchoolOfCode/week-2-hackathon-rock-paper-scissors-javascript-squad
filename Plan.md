1. Task 1: test logic 
Create 2 variables:
let playerMove = ["rock"; "paper"; "scissors]
let computerMove = ["paper"; "rock"; "scissors"]

Write a set of if statements that will determine the winner of rock, paper, scissors.

if playerMove === computerMove 
return prompt: "Its a tie"

if playerMove = "rock" && computerMove = "scissors" 
return prompt: "player wins"

if computerMove = "rock" && playerMove = "scissors" 
return prompt: "computer wins"

if playerMove = "rock" && computerMove = "paper" 
return prompt: "computer wins"

if computerMove  = "rock" && playerMove = "paper" 
return prompt: "player wins"

if playerMove = "paper" && computerMove = "scissors"
return prompt: "computer wins"

if computerMove = "paper" && playerMove = "scissors"
return prompt: "player wins"

2. Task 2: Function - creating function to test the if statements.
Parameters are playerMove and ComputerMove. 
Put if/else statements from task 1 into code block. 
Return result as alert: 1 (player wins), 0 (draw), -1 (player loses)

3. Task 3: Player Input
Create prompt for player input value (rock/scissors/paper)
Create function shows player input and computerMove 

functiton functionname(playerMove, computerMove){
    //task 2 function alert(`Player move is ${playerMove} and computer move is ${computerMove} . Result: win/lose/draw)
}

<!-- how display result? (1, 0, -1) -->

4. Task 4: Computer player
Write a function that generates a random computer move: 

function Math.floor(Math.random() *3+1)
1 = "rock"
2 = "paper"
3 = "scissors"

7. Create function asking for user name input
- Return greeting + name
8. Make sure player input is valid (capitals/spelling)
