const choices = ["rock", "paper", "scissors"];

document.getElementById("rock").addEventListener("click", function () {
    makeChoice("rock");
});

document.getElementById("paper").addEventListener("click", function () {
    makeChoice("paper");
});

document.getElementById("scissors").addEventListener("click", function () {
    makeChoice("scissors");
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if ((userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")) {
        handleWin()
            return "You win!";
    } else {
        handleLoss()
        return "Computer wins!";
    }
}

function makeChoice(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    // document.getElementById("result").innerText = `Computer chose ${computerChoice}. ${result}`;
    const resultElement = document.getElementById("result");
    // Add animation
    resultElement.classList.add("animate-text");
    resultElement.innerText = `Computer chose ${computerChoice}. ${result}`;
    // Remove the animate-text class after a short delay to allow the animation to play again
    setTimeout(() => {
        resultElement.classList.remove("animate-text");
        // Re-enable buttons after a short delay
        document.getElementById("rock").disabled = false;
        document.getElementById("paper").disabled = false;
        document.getElementById("scissors").disabled = false;
    }, 600);
}
const backgroundMusic = document.getElementById('background-music');
const playPauseButton = document.getElementById('play-pause-button');
const winCountElement = document.getElementById('win-count');
const lossCountElement = document.getElementById('loss-count');

let winCount = 0;
let lossCount = 0;

playPauseButton.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        backgroundMusic.pause();
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    }
});
// Function to handle win event
function handleWin() {
    winCount++;
    winCountElement.textContent = winCount;
}

// Function to handle loss event
function handleLoss() {
    lossCount++;
    lossCountElement.textContent = lossCount;
}
// Event listeners for win and loss events
document.getElementById("rock").addEventListener("click", function () {
    makeChoice("rock");
});
document.getElementById("paper").addEventListener("click", function () {
    makeChoice("paper");
});
document.getElementById("scissors").addEventListener("click", function () {
    makeChoice("scissors");
});