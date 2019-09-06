function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    return choices[getRandomNumber(3)];
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function playRound(playerSelection, computerSelection) {
    if((playerSelection == "rock") && (computerSelection == "scissors")) {
        return "You Win! Rock beats Scissors";
    } else if ((playerSelection == "rock") && (computerSelection == "paper")) {
        return "You Lose! Paper beats Rock";
    }  else if ((playerSelection == "rock") && (computerSelection == "rock")) {
        return "It's a tie!";
    } 
    
    if((playerSelection == "scissors") && (computerSelection == "paper")) {
        return "You Win! Scissors beats Paper";
    } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        return "You Lose! Rock beats Scissors";
    }  else if ((playerSelection == "scissors") && (computerSelection == "scissors")) {
        return "It's a tie!";
    } 

    if((playerSelection == "paper") && (computerSelection == "rock")) {
        return "You Win! Paper beats Scissors";
    } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        return "You Lose! Scissors beats Paper";
    }  else if ((playerSelection == "paper") && (computerSelection == "paper")) {
        return "It's a tie!";
    } 
}