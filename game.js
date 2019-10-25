function calcComputerPlay() {
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

const playerButtons = document.querySelectorAll('.player-btn');
const playerScoreDisplay = document.querySelector('#player-score > span');
const computerScoreDisplay = document.querySelector('#computer-score > span');
const tieScoreDisplay = document.querySelector('#tie-score > span');
const result = document.querySelector('#match-result');

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

playerButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // use first index of playRound as it contains who won/lost/tied
        const currentRound = playRound(e.target.id, calcComputerPlay());
        result.textContent = currentRound[0];

        // increment the score and update the display
        if(currentRound[1] == 'player') {
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
        } else if(currentRound[1] == 'computer') {
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
        } else {
            tieScore++;
            tieScoreDisplay.textContent = tieScore;
        }
    });
});
