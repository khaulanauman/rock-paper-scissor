"use strict"
const paperBtn = document.querySelector("#paper");
const rockBtn = document.querySelector("#rock");
const scissorBtn = document.querySelector("#scissor");

paperBtn.addEventListener("click",playTurn);
rockBtn.addEventListener("click",playTurn);
scissorBtn.addEventListener("click",playTurn);
const scoreP = document.querySelector(".score-update");


function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
let userScore=0;
let computerScore=0;
function playTurn(event){
    let userChoice= event.target.id;
    let computerChoice=getComputerChoice();
    let message="";
    
    if(computerChoice==userChoice){
        message="Computer chose "+computerChoice+ ". It is a draw. ";
    }
    else if(userChoice=="rock"){
        if(computerChoice=="paper"){
            computerScore++;
            message="Computer chose "+computerChoice+" Computer wins. ";
        }
        if(computerChoice=="scissor"){
            userScore++;
            message="Computer chose "+computerChoice+" You win!. ";
        }
    }
    else if(userChoice=="paper"){
        if(computerChoice=="rock"){
            userScore++;
            message="Computer chose "+computerChoice+" You win!. ";
        }
        if(computerChoice=="scissor"){
            computerScore++;
            message="Computer chose "+computerChoice+" Computer wins ";
        }
    }
    else if(userChoice=="scissor"){
        if(computerChoice=="paper"){
            userScore++;
            message="Computer chose "+computerChoice+" You win!. ";
        }
        if(computerChoice=="rock"){
            computerScore++;
            message="Computer chose "+computerChoice+" Computer wins. ";
        }
    }
        scoreP.textContent=message;
        document.querySelector(".user-score").textContent="User Score : "+userScore;
        document.querySelector(".computer-score").textContent="Computer Score : "+computerScore;
        if(userScore==5){
            scoreP.textContent="You have won this round";
            userScore=0;
            computerScore=0;
        }
        if(computerScore==5){
            scoreP.textContent="Computer has won this round";
            computerScore=0;
            userScore=0;
        }
        
        
        

}