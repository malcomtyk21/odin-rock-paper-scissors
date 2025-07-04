let humanScore = 0;
let computerScore = 0;
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const scores = document.querySelector(".scores");
const newP = document.createElement("p");
const winnerDisplay = document.querySelector(".winnerDisplay");
const restartBtn = document.createElement("button");


function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(choice) {
    console.log(choice);
    return choice;
}

function playRound(humanChoice, computerChoice) {
    let msg = '';

    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        msg = "You lose! Paper beats Rock";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        msg = "You won! Rock beats Scissors";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        msg = "You lose! Scissors beats Paper";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        msg = "You won! Paper beats Rock";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        msg = "You lose! Rock beats Scissors";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        msg = "You won! Scissors beats Paper";
    } else {
        msg = "Draw!";
    }

    result();
    winner();
    return msg;
}

function playGame() {

    for (let i = 1; i <= 5 ; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const scoreStatement = document.createElement("div");

        score.appendChild(scoreStatement);
        scoreStatement.textContent = playRound(humanSelection, computerSelection);
    }
    
    if (humanScore < computerScore) {
        return "You lose! Score: " + humanScore + " to " + computerScore;
    } else if (humanScore > computerScore) {
        return "You win! Score: " + humanScore + " to " + computerScore;
    } else {
        return "Draw! Score: " + humanScore + " to " + computerScore;
    }
}

function result() {
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
}

function winner() {
    if (humanScore == 5) {
        winnerDisplay.textContent = "Congrats! You won!";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        restartBtn.textContent = 'Restart?'
        winnerDisplay.appendChild(restartBtn);
    } else if (computerScore == 5) {
        winnerDisplay.textContent = "Oh no! The computer won!";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        restartBtn.textContent = 'Restart?'
        winnerDisplay.appendChild(restartBtn);
    }
}

rockBtn.addEventListener('click', () => {
    const statement = playRound("paper", getComputerChoice());

    scores.appendChild(newP);
    newP.textContent = statement;
});

paperBtn.addEventListener('click', () => {
    const statement = playRound("paper", getComputerChoice());

    scores.appendChild(newP);
    newP.textContent = statement;
});

scissorsBtn.addEventListener('click', () => {
    const statement = playRound("scissors", getComputerChoice());
    
    scores.appendChild(newP);
    newP.textContent = statement;
});

restartBtn.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    winnerDisplay.textContent = '';
    newP.textContent = '';
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    result();
    winnerDisplay.removeChild(restartBtn);
})



