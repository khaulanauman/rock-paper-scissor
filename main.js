"use strict"
//if 0 user won the turn
//if 1 computer won
//if -1 draw
let userChoice;
let computerChoice;
let userCount=0;
let computerCount=0;
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
function playTurn(userChoice,computerChoice){
    console.log("user "+userChoice);
    console.log("computer "+computerChoice);
    if(computerChoice==userChoice){
        return -1;
    }
    else if(userChoice=="rock"){
        if(computerChoice=="paper"){
            return 1;
        }
        if(computerChoice=="scissor"){
            return 0;
        }
    }
    else if(userChoice=="paper"){
        if(computerChoice=="rock"){
            return 0;
        }
        if(computerChoice=="scissor"){
            return 1;
        }
    }
    else if(userChoice=="scissor"){
        if(computerChoice=="paper"){
            return 0;
        }
        if(computerChoice=="rock"){
            return 1;
        }
    }
    else{
        alert("please enter valid choice");
    }
}
function playGame(){
    let result;
    for(let i=1;i<=5;i++){
        alert("Round "+i);
        userChoice=prompt("Enter your choice");
        userChoice=userChoice.toLowerCase();
        if(userChoice=="rock"||userChoice=="paper"||userChoice=="scissor"){
            result=playTurn(userChoice,getComputerChoice());
            if(result==0){
                userCount++;
                alert("You won this round");
            }
            else if(result==1){
                computerCount++;
                alert("You lost this round");
            }
            else{
                //it always goes here
                alert("It is a draw");
            }
        }
        else if(userChoice==false){
            break;
        }
        else{
            alert("Please enter a valid choice");
        }
        
        
    }
    
}
alert("Welcome to the rock paper scissor game \nYou will be playing against the computer");
playGame();
if(userCount>computerCount){
    console.log("You won the game.");
}
else{
    console.log("You lost this game");
}