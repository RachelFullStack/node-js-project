///// TIMER /////
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
///// WORKOUT TABLE /////
var workoutData = [
    { exercise: "Push-ups", sets: 3, reps: 15 },
    { exercise: "Squats", sets: 4, reps: 12 },
    { exercise: "Plank", sets: 3, reps: "30s" },
];
var tableBody = document.getElementById("tableBody");
function populateTable() {
    workoutData.forEach(function (exercise) {
        var row = document.createElement("tr");
        row.innerHTML = "\n        <td>" + exercise.exercise + "</td>\n        <td>" + exercise.sets + "</td>\n        <td>" + exercise.reps + "</td>\n      ";
        tableBody.appendChild(row);
    });
}
window.addEventListener("load", populateTable);
