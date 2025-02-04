// Tic Tac Toe! 
// The player chooses either Rock, Paper, or Scissors. The oponent is the computer, which will generate a response. 
// The screen will display the score of both players as well if the round ends in a draw.
// It will dipslay the winner based on a 5 round match, then reset scores.
// This game will also diplay the results of each round on the console.

let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
let winner = "";

// Random number generator that returns either
// rock paper or scissors
function getComputerChoice(){
    const randomNum = Math.random();

    if (randomNum <= 0.33){
        return "Rock"
    }
    else if(randomNum <= 0.66){
        return "Paper"
    }
    else{
        return "Scissors"
    }
}

// Compares the user's selection and computer selection 
// to verify the winner. It also keeps scores for User, Computer, or a Tie
function playRound(humanChoice, computerChoise){

    if (humanChoice == "Rock" && computerChoise == "Scissors" ||
        humanChoice == "Paper" && computerChoise == "Rock" ||
        humanChoice == "Scissors" && computerChoise == "Paper"
    ){
        humanScore += 1;
        winner = "You Win!";
        console.log(winner)
    }
    else if (humanChoice == computerChoise){
        tieScore += 1;
        winner = "It's a Tie!";
        console.log(winner);
    }
    else{
        computerScore += 1;
        winner = "You Lose!";
        console.log(winner)
    }

    console.log("Your score " + humanScore);
    console.log("Computer score " + computerScore);
    console.log("Tie score " + tieScore);
    console.log(computerChoise);

// Initial function that starts the game, by giving the User's 
// selection from the button as an argument. Then it 
// starts a single round.
}function playGame(userChoice)
{
    let comp = getComputerChoice();
    playRound(userChoice, comp);
}

// Identifies who is the winner of the match of 5 rounds.
// This is the simplest way of knowing who is the winner of 5 rounds.
// I tried using '%' but it got more complicated and bigger function.
function whoWinsMatch(){

    if (computerScore == 5){
        compScoreVar.textContent = "Computer Wins!";
        resetScores()
    }
    else if (humanScore == 5){
        personScoreVar.textContent = "You Win!";
        resetScores();
    }
    else{
        showScores();
    }
}

// Resets the scores to start new match.
// It needs to be reset so that the whoWinsMatch can identify winner.
function resetScores(){
    computerScore = 0;
    humanScore = 0;
    tieScore = 0;
}

function showScores(){
    compScoreVar.textContent = "Computer: "+ computerScore;
    personScoreVar.textContent = "You: " + humanScore;
    tieScoreVar.textContent = "Tie: " + tieScore;
}


// Selector for all 3 buttons and 3 var labels 
const btn1 = document.querySelector("#btnRock");
const btn2 = document.querySelector("#btnPaper");
const btn3 = document.querySelector("#btnScissors");
const compScoreVar = document.querySelector("#compScoreVar");
const personScoreVar = document.querySelector("#personScoreVar");
const tieScoreVar = document.querySelector("#tieScoreVar");

// Event listener for the 3 Tic Tac Toe selection buttons.
btn1.addEventListener("click", () => {
    let user = btn1.textContent;
    console.log(user);
    playGame(user);
    whoWinsMatch();
})

btn2.addEventListener("click", () => {
    let user = btn2.textContent;
    playGame(user);
    whoWinsMatch();
}) 
    
btn3.addEventListener("click", () => {
    let user = btn3.textContent;
    playGame(user);
    whoWinsMatch();
})

    
    