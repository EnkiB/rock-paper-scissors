//A rock paper scissors game on the console.
console.log("Start of game!")

//Create computer choice.
function getComputerChoice() {
    //random choice 0-2, each responding to rock, paper, scissors.
    const randChoice = Math.floor(Math.random() * 10) % 3;
    let choice;

    if(randChoice === 0) {
        choice = "Rock";
    } else if(randChoice === 1) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }

    return choice;
}

function playRound(playerSelection, compSelection) {
    const player = playerSelection.toLowerCase();
    const comp = compSelection.toLowerCase();
    let result;

    if(player === comp) {
        return "Tie!";
    }

    switch (player){
        case "rock":
            if(comp === "paper") {
                result = "You Lose! Paper beats Rock!";
            } else if(comp === "scissors") {
                result = "You Won! Rock beats Scissors!"
            }
            break;
        case "paper":
            if(comp === "scissors") {
                result = "You Lose! Scissors beats Paper!";
            } else if(comp === "rock") {
                result = "You Won! Paper beats Rock!"
            }
            break;
        case "scissors":
            if(comp === "rock") {
                result = "You Lose! Rock beats Scissors!";
            } else if(comp === "paper") {
                result = "You Won! Scissors beats Paper!"
            }
            break;
        default:
            break;
    }

    return result;
}

function playGame(numRounds) {
    let playerScore = 0;
    let compScore = 0;
    let result;

    for(let i = 0; i < numRounds; i++) {
        console.log("Round #" + (i+1));
        result = playRound(playerSel, getComputerChoice());
        if(result.includes("Won")) {
            playerScore++;
        } else if(result.includes("Lose")) {
            compScore++;
        }
        console.log(result);
    }

    console.log("Player score: " + playerScore);
    console.log("Computer score: " + compScore);
    if(playerScore > compScore) {
        console.log("You won the game!")
    } else if(compScore > playerScore) {
        console.log("You lost the game!")
    } else {
        console.log("The game ended in a tie!")
    }
}

const playerSel = "rock";

playGame(10);

