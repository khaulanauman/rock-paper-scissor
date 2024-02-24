"use strict"
//user choice
//computer choice
//play function
//take input from user and compter 
//play-for one baari
//game function will play it 3 times keeping tract of winner in each turn through counter
//when loop ends result is displayed
//if 0 user won the turn
//if 1 computer won
//if -1 draw
let userChoice;
let computerChoice;
function getComputerChoice(){
    let options=["rock","paper","scissor"];
    return Math.random(options);
}
function playTurn(userChoice){
    userChoice=toLowerCase(window.prompt("Your choice"));
    computerChoice=getComputerChoice();
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
    let userCount=0;
    let computerCount=0;
    let result;
    for(let i=1;i<=5;i++){
        userChoice=prompt("Enter your choice");
        result=playTurn(userChoice);
        if(result==0){
            userCount++;
            console.log("You won this round");
        }
        else if(result==1){
            computerCount++;
            console.log("You lost this round");
        }
        else{
            console.log("It is a draw");
        }
    }
    if(userCount>computerCount){
        console.log("You won the game.");
    }
    else{
        console.log("You lost this game");
    }
}
alert("Welcome to the rock paper scissor game \nYou will be playing against the computer");
playGame();