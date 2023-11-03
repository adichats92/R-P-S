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
        return "You win!";
    } else {
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
    }, 600);
}
const backgroundMusic = document.getElementById('background-music');
const playPauseButton = document.getElementById('play-pause-button');

playPauseButton.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        backgroundMusic.pause();
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    }
});
