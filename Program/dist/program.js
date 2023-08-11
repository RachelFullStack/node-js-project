var timerInterval = null;
var startTime = 0;
var elapsedTime = 0;
var isPaused = true;
var timerDisplay = document.getElementById("timerDisplay");
var startButton = document.getElementById("startButton");
var pauseButton = document.getElementById("pauseButton");
var resetButton = document.getElementById("resetButton");
function updateDisplay() {
    var totalSeconds = Math.floor((elapsedTime + (Date.now() - startTime)) / 1000);
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;
    timerDisplay.textContent = minutes.toString().padStart(2, "0") + ":" + seconds
        .toString()
        .padStart(2, "0");
}
function startTimer() {
    if (isPaused) {
        isPaused = false;
        startTime = Date.now() - elapsedTime;
        updateDisplay();
        timerInterval = setInterval(updateDisplay, 1000);
    }
}
function pauseTimer() {
    if (!isPaused) {
        isPaused = true;
        elapsedTime += Date.now() - startTime;
        clearInterval(timerInterval);
    }
}
function resetTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    isPaused = true;
    elapsedTime = 0;
    timerDisplay.textContent = "00:00";
}
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
