
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


function playGame() {
    let humanScore = 0;
    let computerSCore = 0;

    // TODO
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        
    }

    for (let i = 1; i <= 5; i++) {
        playRound()
        console.log(i);
    }
}

playGame();