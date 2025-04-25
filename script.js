
function getComputerChoice() {
    let randomDecimal = Math.random() * 100;

    let random = Math.trunc(randomDecimal);

    if (random <= 33) {
        return "rock";
    } else if (random <= 67) {
        return "paper";
    } else {
        return "scissors";
    }

}

function getHumanChoice() {
    
    let choice = prompt("Take your pick: ");
    return choice.toLocaleLowerCase();    
}


function playGame() {
    let humanScore = 0;
    let computerSCore = 0;

    function increment(winner, humanChoice, computerChoice) {
        if (winner == "human") {
            console.log(`You win, ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
            computerSCore++;
        }
    }
    
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice;
        
        if (humanChoice === computerChoice) {
            console.log("It's a tie");
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            increment("computer", "rock", "paper");
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            increment("human", "paper", "rock");
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            increment("human", "rock", "scissors");
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            increment("computer", "scissors", "rock");
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            increment("computer", "paper", "scissors");
        } else {
            increment("human", "scissors", "paper");
        }
    }

    for (let i = 1; i <= 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }

    let gameWinner;
    if (humanScore > computerSCore) {
        gameWinner = "The Player";
    } else if (computerSCore > humanScore) {
        gameWinner = "Computer";
    } else {
        gameWinner = "Nobody, it's a tie";
    }

    console.log("The winner is: " + gameWinner)
    
}

playGame();