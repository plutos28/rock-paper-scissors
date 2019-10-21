function computerPlay() {
    let choices = ["rock", "paper", "scissors"]
    return choices[getRandomNumber(3)]
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

function playRound(playerSelection, computerSelection) {
    // will return array with winner and message

    // to make sure all cases work(rock, RoCk, ROCK)
    playerSelection = playerSelection.toLowerCase()

    if(playerSelection == "rock" && computerSelection == "scissors") {
        return ["You Win! Rock beats Scissors", "player"];
    }else if(playerSelection == "rock" && computerSelection == "paper") {
        return ["You Lose! Paper beats Rock", "computer"];
    }else if(playerSelection == "rock" && computerSelection == "rock") {
        return ["It's a tie!", "none"];
    }else if(playerSelection == "scissors" && computerSelection == "paper") {
        return ["You Win! Scissors beats Paper", "player"];
    }else if(playerSelection == "scissors" && computerSelection == "rock") {
        return ["You Lose! Rock beats Scissors", "computer"];
    }else if(playerSelection == "scissors" && computerSelection == "scissors") {
        return ["It's a tie!", "none"];
    }else if(playerSelection == "paper" && computerSelection == "rock") {
        return ["You Win! Paper beats Rock", "player"];
    }else if(playerSelection == "paper" && computerSelection == "scissors") {
        return ["You Lose! Scissors beats Paper", "computer"];
    }else if(playerSelection == "paper" && computerSelection == "paper") {
        return ["It's a tie!", "none"];
    }
}

function showResults(e) {
    const result = document.querySelector('#match-result');
    result.textContent = playRound(this.id, computerPlay())[0];
}

const playerButtons = document.querySelectorAll('.player-btn');

const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');

playerButtons.forEach((btn) => {
    btn.addEventListener('click', showResults)
});
