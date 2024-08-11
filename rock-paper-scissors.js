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
    let option = prompt("Choose between Rock, Paper or Scissors.").toLowerCase();
    if (option === "rock" || option === "paper" || option === "scissors") {
        return option;
    } else {
        option = prompt("Try it again! Choose between Rock, Paper or Scissors.");
        return option;
    }
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

//playRound (humanSelection, computerSelection);

function playGame () {

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound (humanSelection, computerSelection);

    console.log(`Player: ${humanScore} | Computer: ${computerScore}`);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound (humanSelection, computerSelection);

    console.log(`Player: ${humanScore} | Computer: ${computerScore}`);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound (humanSelection, computerSelection);

    console.log(`Player: ${humanScore} | Computer: ${computerScore}`);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound (humanSelection, computerSelection);

    console.log(`Player: ${humanScore} | Computer: ${computerScore}`);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound (humanSelection, computerSelection);

    console.log(`Player: ${humanScore} | Computer: ${computerScore}`);

    if (humanScore > computerScore){

        return console.log(`You have won the game! You master rock, paper and scissors.`);

    } else if (computerScore > humanScore) {

        return console.log(`You have lost the game! Try it again...`);

    } else {

        return console.log(`Wow, you've tied with the computer! At least the AI ​​won't come after you...`);

    }
}

playGame();