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
    } else {
        return ['mistake', 'mistake']
    }
}

function playGame(e) {
    let currentRound = playRound(this.id, calcComputerPlay());
    result.textContent = currentRound[0]; // use first index as it contains winner

    // increment the score and update the display from winner
    if(currentRound[1] == 'player') {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else if(currentRound[1] == 'computer') {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    } else{
        tieScore++;
        tieScoreDisplay.textContent = tieScore;
    }

    // check for winning condition of 5 wins
    if(playerScore == 5) {
        alert("Player Wins");
        // reset all scores
        playerScore = 0;
        computerScore = 0;
        tieScore = 0;

        // update score display and result
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
        tieScoreDisplay.textContent = tieScore;
        result.textContent = "";
    } else if(computerScore == 5) {
        alert("Computer Wins");
        // reset all scores
        playerScore = 0;
        computerScore = 0;
        tieScore = 0;

        // update score display and result
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
        tieScoreDisplay.textContent = tieScore;
        result.textContent = "";
    }
}   

// refers to the rock, paper, scissors buttoons
const playerButtons = document.querySelectorAll('.player-btn');

// these variables only take care of displaying the final results 
const playerScoreDisplay = document.querySelector('#player-score > span');
const computerScoreDisplay = document.querySelector('#computer-score > span');
const tieScoreDisplay = document.querySelector('#tie-score > span');
const result = document.querySelector('#match-result');

// these variables are used to keep track of the scores 
// and will later be appended to the display variables 
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

playerButtons.forEach((btn) => {
    btn.addEventListener('click', game);
});

