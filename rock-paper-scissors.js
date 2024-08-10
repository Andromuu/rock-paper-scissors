let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let number = Math.round(Math.random() * 2 );
    switch (number) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        default:
            return "Scissors";
    }
}

console.log(getComputerChoice());

function getHumanChoice (){
    let option = prompt("Choose between Rock, Paper or Scissors.");
    return option.toLowerCase();
}

console.log(getHumanChoice());