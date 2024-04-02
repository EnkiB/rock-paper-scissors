/*
1. User clicks button.
2. Determine winner by comparing player and computer choices.
3. Update round and each player's scores.
4. Repeat until a player reaches a score of 5.
5. Disable buttons, create option for user to play again.
*/

let round = 1;
let playerScore = 0;
let computerScore = 0;

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

//Random computer choice for rock, paper, scissors.
function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

//Determine the winner of a round and update scores.
function determineWinner(playerChoice, computerChoice) {
    if(playerChoice === computerChoice) {
        return 'It was a tie this round!';
    } else if(
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        playerScore++;
        return 'You won this round!';
    } else {
        computerScore++;
        return 'Computer won this round!';
    }
}

function playRound(playerMove) {
    const computerMove = computerChoice();
    const result = determineWinner(playerMove, computerMove);
    document.getElementById('results').innerText = `${playerMove} vs ${computerMove}.\n ${result}`;
    updateScores();
}

function updateScores() {
    //Update scores on the html page.
    document.getElementById('round').innerText = round;
    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('computer-score').innerText = computerScore;

    //End when a score has reached 5.
    if(playerScore >= 5 || computerScore >= 5) {
        endGame( playerScore > computerScore ? 'You' : 'Computer');
    } else {
        round++;
    }
}

//Disable the rock,paper, scissor buttons.
function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

function enableButtons() {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}

function resetGame() {
    round = 1;
    playerScore = 0;
    computerScore = 0;
    document.getElementById('round').innerText = round;
    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('computer-score').innerText = computerScore;
    document.getElementById('results').innerText = '';
    enableButtons();
}

//Called when either player reaches a score of 5.
//1. Disable the buttons.
//2. Create a 'play again' button to reset all the scores.
function endGame(winner) {
    document.getElementById('results').innerText = `${winner} won the game!`;
    disableButtons();

    //Create 'play again' button.
    const playAgainButton = document.createElement('button');
    playAgainButton.id = 'play-again';
    playAgainButton.innerText = 'Play Again';
    playAgainButton.addEventListener('click', function() {
        resetGame();
        this.remove();
    });
    document.body.appendChild(playAgainButton);
}

//Event listeners for each buttons.
rockButton.addEventListener('click', function() {
    playRound('rock');
});

paperButton.addEventListener('click', function() {
    playRound('paper');
});

scissorsButton.addEventListener('click', function() {
    playRound('scissors');
});








