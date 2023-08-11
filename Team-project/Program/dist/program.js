///// TIMER /////
var timerInterval = null;
var startTime = 0;
var elapsedTime = 0;
var accumulatedPauseTime = 0;
var isPaused = true;
var timerDisplay = document.getElementById("timerDisplay");
var startButton = document.getElementById("startButton");
var pauseButton = document.getElementById("pauseButton");
var resetButton = document.getElementById("resetButton");
function updateDisplay() {
    var currentTime = isPaused
        ? accumulatedPauseTime
        : Date.now() - startTime + elapsedTime;
    var totalSeconds = Math.floor(currentTime / 1000);
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;
    timerDisplay.textContent = minutes.toString().padStart(2, "0") + ":" + seconds
        .toString()
        .padStart(2, "0");
}
function startTimer() {
    console.log("Start Button Clicked");
    console.log("isPaused:", isPaused);
    if (isPaused) {
        isPaused = false;
        if (elapsedTime === 0 && accumulatedPauseTime === 0) {
            startTime = Date.now();
        }
        else {
            startTime = Date.now() - accumulatedPauseTime;
        }
        console.log("startTime:", startTime);
        updateDisplay();
        timerInterval = setInterval(updateDisplay, 1000);
    }
}
function pauseTimer() {
    console.log("Pause Button Clicked");
    console.log("isPaused:", isPaused);
    if (!isPaused) {
        isPaused = true;
        accumulatedPauseTime = Date.now() - startTime + elapsedTime;
        console.log("accumulatedPauseTime:", accumulatedPauseTime);
        clearInterval(timerInterval);
    }
}
function resetTimer() {
    console.log("Reset Button Clicked");
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    isPaused = true;
    elapsedTime = 0;
    accumulatedPauseTime = 0;
    timerDisplay.textContent = "00:00";
}
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
///// WORKOUT TABLE /////
var workoutData = [
    { exercise: "Push-ups", Image: "./Images/pushup.png", sets: 3, reps: 15 },
    { exercise: "Squats", Image: "./Images/squat.png", sets: 4, reps: 12 },
    { exercise: "Plank", Image: "./Images/plank.png", sets: 3, reps: "30s" },
];
var tableBody = document.getElementById("tableBody");
function populateTable() {
    workoutData.forEach(function (exercise) {
        var row = document.createElement("tr");
        row.innerHTML = "\n        <td>" + exercise.exercise + "</td>\n        <td><img src=\"images/" + exercise.Image + "\" alt=\"" + exercise.exercise + "\" class=\"exercise-image\"/></td>\n        <td>" + exercise.sets + "</td>\n        <td>" + exercise.reps + "</td>\n      ";
        tableBody.appendChild(row);
    });
}
window.addEventListener("load", populateTable);
