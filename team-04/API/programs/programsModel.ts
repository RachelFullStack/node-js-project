// ///// TIMER /////
// let timerInterval: number | null = null;
// let startTime: number = 0;
// let elapsedTime: number = 0;
// let accumulatedPauseTime: number = 0;
// let isPaused: boolean = true;

// const timerDisplay = document.getElementById("timerDisplay") as HTMLDivElement;
// const startButton = document.getElementById("startButton") as HTMLButtonElement;
// const pauseButton = document.getElementById("pauseButton") as HTMLButtonElement;
// const resetButton = document.getElementById("resetButton") as HTMLButtonElement;

// function updateDisplay() {
//   const currentTime = isPaused
//     ? accumulatedPauseTime
//     : Date.now() - startTime + elapsedTime;
//   const totalSeconds = Math.floor(currentTime / 1000);
//   const minutes = Math.floor(totalSeconds / 60);
//   const seconds = totalSeconds % 60;
//   timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
//     .toString()
//     .padStart(2, "0")}`;
// }
// function startTimer() {
//   console.log("Start Button Clicked");
//   console.log("isPaused:", isPaused);
//   if (isPaused) {
//     isPaused = false;
//     if (elapsedTime === 0 && accumulatedPauseTime === 0) {
//       startTime = Date.now();
//     } else {
//       startTime = Date.now() - accumulatedPauseTime;
//     }
//     console.log("startTime:", startTime);
//     updateDisplay();
//     timerInterval = setInterval(updateDisplay, 1000);
//   }
// }

// function pauseTimer() {
//   console.log("Pause Button Clicked");
//   console.log("isPaused:", isPaused);
//   if (!isPaused) {
//     isPaused = true;
//     accumulatedPauseTime = Date.now() - startTime + elapsedTime;
//     console.log("accumulatedPauseTime:", accumulatedPauseTime);
//     clearInterval(timerInterval!);
//   }
// }

// function resetTimer() {
//   console.log("Reset Button Clicked");
//   if (timerInterval) {
//     clearInterval(timerInterval);
//   }
//   isPaused = true;
//   elapsedTime = 0;
//   accumulatedPauseTime = 0;
//   timerDisplay.textContent = "00:00";
// }

// startButton.addEventListener("click", startTimer);
// pauseButton.addEventListener("click", pauseTimer);
// resetButton.addEventListener("click", resetTimer);

// ///// WORKOUT TABLE /////

// const workoutData = [
//   { exercise: "Push-ups", Image: "./Images/pushup.png", sets: 3, reps: 15 },
//   { exercise: "Squats", Image: "./Images/squat.png", sets: 4, reps: 12 },
//   { exercise: "Plank", Image: "./Images/plank.png", sets: 3, reps: "30s" },
// ];

// const tableBody = document.getElementById(
//   "tableBody"
// ) as HTMLTableSectionElement;

// function populateTable() {
//   workoutData.forEach((exercise) => {
//     const row = document.createElement("tr");
//     row.innerHTML = `
//         <td>${exercise.exercise}</td>
//         <td><img src="images/${exercise.Image}" alt="${exercise.exercise}" class="exercise-image"/></td>
//         <td>${exercise.sets}</td>
//         <td>${exercise.reps}</td>
//       `;
//     tableBody.appendChild(row);
//   });
// }

// window.addEventListener("load", populateTable);
