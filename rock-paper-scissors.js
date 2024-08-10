let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let number = Math.round(Math.random() * 2 );
    switch (number) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        default:
            return "scissors";
    }
}

//console.log(getComputerChoice());

function getHumanChoice (){
    let option = prompt("Choose between Rock, Paper or Scissors.");
    return option.toLowerCase();
}

//console.log(getHumanChoice());

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("We have a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You have won this round! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
        humanScore++;
    } else {
        console.log(`You have lost this round! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound (humanSelection, computerSelection);