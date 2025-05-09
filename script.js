
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
    let result = document.querySelector("#result");
    let playerField = document.querySelector("#player");
    let computerField = document.querySelector("#pc");

    function increment(winner, humanChoice, computerChoice) {
        if (winner == "human") {
            result.textContent = `You win, ${humanChoice} beats ${computerChoice}`;
            humanScore++;
            playerField.textContent = +(playerField.textContent) + 1;
        } else {
            result.textContent = `You lose, ${computerChoice} beats ${humanChoice}`;
            computerSCore++;
            computerField.textContent = +(computerField.textContent) + 1;
        }
    }
    
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice;

        
        
        if (humanChoice === computerChoice) {
            result.textContent = "It's a tie";
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
    /*
    for (let i = 1; i <= 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }*/

    
    let choices = document.querySelector("#choices");

    choices.childNodes.forEach((button) => {
        button.addEventListener("click", (e) => {
            playRound(e.target.id, getComputerChoice());
        })
    })

    let gameWinner;
    if (humanScore > computerSCore) {
        gameWinner = "The Player";
    } else if (computerSCore > humanScore) {
        gameWinner = "Computer";
    } else {
        gameWinner = "Nobody, it's a tie";
    }


    
}


playGame();