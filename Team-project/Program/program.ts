///// TIMER /////
let timerInterval: number | null = null;
let startTime: number = 0;
let elapsedTime: number = 0;
let accumulatedPauseTime: number = 0;
let isPaused: boolean = true;

const timerDisplay = document.getElementById("timerDisplay") as HTMLDivElement;
const startButton = document.getElementById("startButton") as HTMLButtonElement;
const pauseButton = document.getElementById("pauseButton") as HTMLButtonElement;
const resetButton = document.getElementById("resetButton") as HTMLButtonElement;

function updateDisplay() {
  const currentTime = isPaused
    ? accumulatedPauseTime
    : Date.now() - startTime + elapsedTime;
  const totalSeconds = Math.floor(currentTime / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}
function startTimer() {
  console.log("Start Button Clicked");
  console.log("isPaused:", isPaused);
  if (isPaused) {
    isPaused = false;
    if (elapsedTime === 0 && accumulatedPauseTime === 0) {
      startTime = Date.now();
    } else {
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
    clearInterval(timerInterval!);
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

async function fetchWorkoutData() {
  try {
    const response = await fetch("/api/get-workout-data");
    const data = await response.json();
    const workoutDataContainer = document.getElementById(
      "workoutDataContainer"
    );

    data.workoutData.forEach((exercise) => {
      const exerciseDiv = document.createElement("div");
      exerciseDiv.innerHTML = `
        <h3>${exercise.exercise}</h3>
        <img src="${exercise.image}" alt="${exercise.exercise}">
        <p>Sets: ${exercise.sets}, Reps: ${exercise.reps}</p>
      `;
      workoutDataContainer.appendChild(exerciseDiv);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchWorkoutData();
///// COMPLETE BUTTON /////
const completeButton = document.getElementById("completeButton");

if (completeButton) {
  let isCompleted = false;

  completeButton.addEventListener("click", () => {
    if (!isCompleted) {
      completeButton.textContent = "Workout Completed!";
      completeButton.classList.add("completed");
      isCompleted = true;
    }
  });
}

const completeButton = document.getElementById("completeButton");

if (completeButton) {
  let isCompleted = false;

  completeButton.addEventListener("click", async () => {
    if (!isCompleted) {
      completeButton.textContent = "Workout Completed!";
      completeButton.classList.add("completed");
      isCompleted = true;

      const workoutData = window.workoutData || []; // Get your workout data
      try {
        const response = await fetch("/api/add-workout-data", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ workoutData }),
        });
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
  });
}
