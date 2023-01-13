let compScore = 0, playerScore = 0;
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) return "rock";
    else if (random === 1) return "paper";
    else if (random === 2) return "scissors";
}
function getPlayerChoice() {
    let choice;
    do {
        choice = prompt("rock paper or scissors?").toLowerCase();
    } while (choice != "rock" && choice != "paper" && choice != "scissors");
    return choice;
}
function getWinner(playerChoice, compChoice) {
    if (playerChoice === "rock" && compChoice === "scissors") { 
        return "Player wins!"; 
    }
    else if (playerChoice === "rock" && compChoice === "paper") { 
        return "Computer wins!"; 
    }
    else if (playerChoice === "paper" && compChoice === "rock") { 
        return "Player wins!";
    }
    else if (playerChoice === "paper" && compChoice === "scissors") { 
        return "Computer wins!"; 
    }
    else if (playerChoice === "scissors" && compChoice === "paper") { 
        return "Player wins!"; 
    }
    else if (playerChoice === "scissors" && compChoice === "rock") { 
        return "Computer wins!"; 
    }
    else if (playerChoice === compChoice) return "Draw!!!";
}
function Play(playerChoice, compChoice) {
    document.getElementById("displaytext").innerText = 
    (`Player chose ${playerChoice} and Computer chose 
    ${compChoice}\n${winner}`);
}
function Game() {
    let playerChoice = getPlayerChoice();
    let compChoice = getComputerChoice();
    let winner = getWinner(playerChoice, compChoice);
    if (winner === "Player wins!") playerScore++;
    else if (winner === "Computer wins!") compScore++;
    document.getElementById("button").innerHTML =
    (`${playerScore} | ${compScore}`);
    Play(playerChoice, compChoice);
}