let choices = document.querySelector("#choices");
let result = document.querySelector("#result");
let playerScoreField = document.querySelector("#player");
let computerScoreField = document.querySelector("#pc");
let winnerAnnounce = document.querySelector("#announce");
let restart = document.querySelector("#restart");


function getComputerChoice() {
    let random = Math.random() * 100;

    if (random <= 33) {
        return "rock";
    } else if (random <= 67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function reset () {
    choices.style.display = "none";
    restart.addEventListener("click", () => {
        result.textContent = "";
        winnerAnnounce.textContent = "";
        playerScoreField.textContent = "0";
        computerScoreField.textContent = "0";
        choices.style.display = "block";
    })    
}


function playGame() {
    
    function increment(winner, humanChoice, computerChoice) {
        if (winner == "human") {
            result.textContent = `You win, ${humanChoice} beats ${computerChoice}`;

            playerScoreField.textContent = +(playerScoreField.textContent) + 1;
            if (playerScoreField.textContent == 5) {
                winnerAnnounce.textContent = "Congrats! You won."
                reset();
            }
        } else {
            result.textContent = `You lose, ${computerChoice} beats ${humanChoice}`;

            computerScoreField.textContent = +(computerScoreField.textContent) + 1;
            if (computerScoreField.textContent == 5) {
                winnerAnnounce.textContent = "You lost! Try again."
                reset();
            }
        }
    }
    
    function playRound(humanChoice, computerChoice) {
    
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


    choices.childNodes.forEach((button) => {
        button.addEventListener("click", (e) => {            
            playRound(e.target.id, getComputerChoice());            
        })
    })
    
}

playGame();
