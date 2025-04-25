let humanScore = 0;
let computerSCore = 0;


function getComputerChoice() {
    let randomDecimal = Math.random() * 100;

    let random = Math.trunc(randomDecimal);

    if (random <= 33) {
        return "Rock";
    } else if (random <= 67) {
        return "Paper";
    } else {
        return "Scissors";
    }

}

function getHumanChoice() {
    
    let choice = prompt("Take your pick: ");
    console.log(choice);
    
}

function playRound(humanChoice, computerChoice) {
    let humanChoice = getHumanChoice().toLowerCase();
    let computerChoice = getComputerChoice().toLowerCase();
}