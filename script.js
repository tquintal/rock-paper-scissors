let playerSelection;
let computerSelection;
let winner;
let playerScore = 0;
let computerScore = 0;

const game = () => {

    clearRounds();

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
            alert(`Error! "${playerSelection}" is not valid. \n`);
        }

    }

    playRound(playerSelection, computerSelection);

    if (computerScore === 5 || playerScore === 5) {
        if (computerScore === 5) {
            checkRounds();
            document.getElementById("hwinner").textContent = "Loser!";
            document.getElementById('hwinner').style.opacity = 1;
            document.getElementById("hwinner").style.color = "red";
        }
        if (playerScore === 5) {
            checkRounds();
            document.getElementById("hwinner").textContent = "Winner!";
            document.getElementById('hwinner').style.opacity = 1;
            document.getElementById("hwinner").style.color = "#00ff00";
        }
    }

}

// KEYPRESSPLAY
const keyPressPlay = (e) => {

    if (e.keyCode === 82) {
        playerSelection = "Rock".toLowerCase();
    } else if (e.keyCode === 80) {
        playerSelection = "Paper".toLowerCase();
    } else if (e.keyCode === 83) {
        playerSelection = "Scissors".toLowerCase();
    } else {
        return;
    }
    console.log(e.keyCode);
    game();
}

window.addEventListener('keydown', keyPressPlay);

// CLICKBUTTONPLAY
const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {

    playerSelection = "Rock".toLowerCase();
    game();

});

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {

    playerSelection = "Paper".toLowerCase();
    game();

});

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {

    playerSelection = "Scissors".toLowerCase();
    game();

});

// Helpers
let yRounds = parseInt(localStorage.getItem('yRounds')) || 0;
document.getElementById("yRounds").textContent = `You: ${yRounds}`;
console.log("Type of 'yRounds': ", typeof yRounds);

let pcRounds = parseInt(localStorage.getItem('pcRounds')) || 0;
document.getElementById("pcRounds").textContent = `Computer: ${pcRounds}`;
console.log("Type of 'pcRounds': ", typeof pcRounds);

const checkRounds = () => {
    if (computerScore === 5 || playerScore === 5) {
        if (computerScore === 5) {
            pcRounds += 1;
            localStorage.setItem('pcRounds', pcRounds);
            document.getElementById("pcRounds").textContent = `Computer: ${pcRounds}`;
        } else if (playerScore === 5) {
            yRounds += 1;
            localStorage.setItem('yRounds', yRounds);
            document.getElementById("yRounds").textContent = `You: ${yRounds}`;
        } else {
            return;
        }
    } else {
        return;
    }
}

const clearRounds = () => {
    if (computerScore === 5 || playerScore === 5) {
        document.getElementById("hyou").textContent = `You: ${playerScore = 0}`;
        document.getElementById("hcomputer").textContent = `Computer: ${computerScore = 0}`
        document.getElementById('hwinner').style.opacity = 0;
    }
}

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

const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', () => {

    pcRounds = 0;
    yRounds = 0;
    localStorage.setItem('pcRounds', pcRounds);
    document.getElementById("pcRounds").textContent = `Computer: ${pcRounds}`;
    localStorage.setItem('yRounds', yRounds);
    document.getElementById("yRounds").textContent = `You: ${yRounds}`;

});
