let humanScore = 0;
let computerScore = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

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

function getHumanChoice (id){
    let option = id;
    switch (option) {
        case "rock":
            return "rock";
            break;
        case "paper":
            return "paper";
            break;
        case "scissors":
            return "scissors";
            break;
    } 
}

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

rock.addEventListener("click", () => {playRound(getHumanChoice(rock.id), getComputerChoice())});
paper.addEventListener("click", () => {playRound(getHumanChoice(paper.id), getComputerChoice())});
scissors.addEventListener("click", () => {playRound(getHumanChoice(scissors.id), getComputerChoice())});