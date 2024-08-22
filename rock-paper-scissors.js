let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const div = document.getElementById("container");
const winner = document.createElement("p");
const score = document.createElement("p");
const bReset = document.createElement("button");

bReset.setAttribute("id", "resetGame");
bReset.textContent = "Reset Game";

div.appendChild(winner);
div.appendChild(score);

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
    switch (id) {
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

function disableButtons (){
    buttons.forEach(item => {
        item.disabled = true;
    });
}

function resetGame (){
    location.reload();
}

bReset.addEventListener("click", () => {resetGame()});

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        winner.innerText = "We have a tie!";
        score.innerText = `Human: ${humanScore} | Computer: ${computerScore}`;
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock") {
        winner.innerText =  `You have won this round! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
        humanScore++;
        score.innerText = `Human: ${humanScore} | Computer: ${computerScore}`;
        if (humanScore == 5){
            winner.innerText = "You have beaten the computer!";
            disableButtons();
            div.appendChild(bReset);
        }
    } else {
        winner.innerText = `You have lost this round! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
        computerScore++;
        score.innerText = `Human: ${humanScore} | Computer: ${computerScore}`;
        if (computerScore == 5){
            winner.innerText = "You have lost against the computer!";
            disableButtons();
            div.appendChild(bReset);
        }
    }
}

rock.addEventListener("click", () => {playRound(getHumanChoice(rock.id), getComputerChoice())});
paper.addEventListener("click", () => {playRound(getHumanChoice(paper.id), getComputerChoice())});
scissors.addEventListener("click", () => {playRound(getHumanChoice(scissors.id), getComputerChoice())});
