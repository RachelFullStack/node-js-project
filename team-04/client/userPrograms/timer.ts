// ///// TIMER /////
let timerInterval: number | null;
let startTime: number = 0;
let elapsedTime: number = 0;
let accumulatedPauseTime: number = 0;
let isPaused: boolean = true;

const timerDisplay = document.getElementById("timerDisplay") as HTMLDivElement;
const startButton = document.getElementById("startButton") as HTMLButtonElement;
const pauseButton = document.getElementById("pauseButton") as HTMLButtonElement;
const resetButton = document.getElementById("resetButton") as HTMLButtonElement;

// function to update the timer display
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

// function to start the timer
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
    timerInterval = setInterval(updateDisplay, 1000) as unknown as number;
  }
}

// function to pause the timer
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

// function to reset the timer
function resetTimer() {
  console.log("Reset Button Clicked");
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  isPaused = true;
  elapsedTime = 0;
  accumulatedPauseTime = 0;
  updateDisplay();
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

///// COMPLETE BUTTON /////
// const completeButton = document.getElementById(
//   "completeButton"
// ) as HTMLButtonElement;

// if (completeButton) {
//   let isCompleted = false;

//   completeButton.addEventListener("click", async () => {
//     if (!isCompleted) {
//       completeButton.textContent = "Workout Completed!";
//       completeButton.classList.add("completed");
//       isCompleted = true;

//       const workoutData: any[] = (window as any).workoutData || [];
//       try {
//         const response = await fetch("/fitnessApi/workout/add-workout-data", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ workoutData }),
//         });
//         const result = await response.json();
//         console.log(result);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   });
// }
