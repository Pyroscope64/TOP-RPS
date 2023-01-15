let compScore = 0, playerScore = 0;
let displaytext = document.getElementById("displaytext");
let score = document.getElementById("score");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
rock.onclick = () => {
    Game("rock");
}
paper.onclick = () => {
    Game("paper");
}
scissors.onclick = () => {
    Game("scissors");
}
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) return "rock";
    else if (random === 1) return "paper";
    else if (random === 2) return "scissors";
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
function Game(playerChoice) {
    let compChoice = getComputerChoice();
    let winner = getWinner(playerChoice, compChoice);
    if (winner === "Player wins!") playerScore++;
    else if (winner === "Computer wins!") compScore++;
    score.innerHTML = (`${playerScore} | ${compScore}`);
    displaytext.innerText = (`Player chose ${playerChoice} 
    and Computer chose ${compChoice}\n${winner}`);
}