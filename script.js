let playerSelection;
let computerSelection;
let winner;
let playerScore = 0;
let computerScore = 0;

const game = () => {

    const computerPlay = () => {
        const values = ["rock", "paper", "scissors"];
        return values[Math.floor(Math.random() * values.length)];
    }

    computerSelection = computerPlay();

    const playRound = (playerSelection, computerSelection) => {

        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
            if (computerSelection === playerSelection) {
                return winner = "tie", winnerH();
            } else if (computerSelection === "rock") {
                if (playerSelection === "paper") {
                    return winner = "player", winnerH();
                } else if (playerSelection === "scissors") {
                    return winner = "computer", winnerH();
                }
            } else if (computerSelection === "paper") {
                if (playerSelection === "rock") {
                    return winner = "computer", winnerH();
                } else if (playerSelection === "scissors") {
                    return winner = "player", winnerH();
                }
            } else if (computerSelection === "scissors") {
                if (playerSelection === "rock") {
                    return winner = "player", winnerH();
                } else if (playerSelection === "paper") {
                    return winner = "computer", winnerH();
                }
            }
        } else {
            return `Error! ${playerSelection} is not valid. \n`;
        }

    }

    playRound(playerSelection, computerSelection)

    if (computerScore === 5 || playerScore === 5) {
        if (computerScore === 5) {
            document.getElementById("hwinner").textContent = "Loser!";
            document.getElementById('hwinner').style.opacity = 1;
            document.getElementById("hwinner").style.color = "red";
        }
        if (playerScore === 5) {
            document.getElementById("hwinner").textContent = "Winner!";
            document.getElementById('hwinner').style.opacity = 1;
            document.getElementById("hwinner").style.color = "#00ff00";
        }
    }

}

const play = value => {

    document.getElementById('htie').style.opacity = 0;

    if (value === 1) {
        playerSelection = "Rock".toLowerCase();
    } else if (value === 2) {
        playerSelection = "Paper".toLowerCase();
    } else {
        playerSelection = "Scissors".toLowerCase();
    };
    if (computerScore === 5 || playerScore === 5) {
        document.getElementById("hyou").textContent = `You: ${playerScore = 0}`;
        document.getElementById("hcomputer").textContent = `Computer: ${computerScore = 0}`
        document.getElementById('hwinner').style.opacity = 0;
    }

    game();

}

// Helper
const winnerH = () => {
    if (winner === "player") {
        return document.getElementById("hyou").textContent = `You: ${playerScore += 1}`,
            document.getElementById('htie').textContent = `You won this round, ${playerSelection} beats ${computerSelection}!`, document.getElementById('htie').style.opacity = 1;
    }
    if (winner === "computer") {
        return document.getElementById("hcomputer").textContent = `Computer: ${computerScore += 1}`,
            document.getElementById('htie').textContent = `You lost this round, ${computerSelection} beats ${playerSelection}...`, document.getElementById('htie').style.opacity = 1;
    }
    if (winner === "tie") {
        return document.getElementById('htie').textContent = `Tie Game!`, document.getElementById('htie').style.opacity = 1;
    }
}
