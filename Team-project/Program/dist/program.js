// import { fetchProgramData } from "../dist/api";
// ///// TIMER /////
// let timerInterval: number | null;
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
//     timerInterval = setInterval(updateDisplay, 1000) as unknown as number;
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
//   updateDisplay();
// }
// startButton.addEventListener("click", startTimer);
// pauseButton.addEventListener("click", pauseTimer);
// resetButton.addEventListener("click", resetTimer);
// ///// WORKOUT TABLE /////
// async function fetchWorkoutData() {
//   try {
//     const response = await fetch("/api/get-workout-data");
//     const data = await response.json();
//     const workoutDataContainer = document.getElementById(
//       "workoutDataContainer"
//     ) as HTMLElement;
//     workoutDataContainer.innerHTML = "";
//     data.allData.forEach((tableData: any, tableIndex: number) => {
//       const table = document.createElement("table");
//       const tableHead = document.createElement("thead");
//       const tableBody = document.createElement("tbody");
//       const headerRow = document.createElement("tr");
//       const headers = ["Exercise", "Image", "Sets", "Reps"];
//       for (const headerText of headers) {
//         const headerCell = document.createElement("th");
//         headerCell.textContent = headerText;
//         headerRow.appendChild(headerCell);
//       }
//       tableHead.appendChild(headerRow);
//       tableData.forEach((exercise: any) => {
//         const row = document.createElement("tr");
//         const { exercise: exerciseText, image, sets, reps } = exercise;
//         const exerciseCell = document.createElement("td");
//         exerciseCell.textContent = exerciseText;
//         row.appendChild(exerciseCell);
//         const imageCell = document.createElement("td");
//         const imageElement = document.createElement("img");
//         imageElement.src = image;
//         imageElement.alt = exerciseText;
//         imageCell.appendChild(imageElement);
//         row.appendChild(imageCell);
//         const setsCell = document.createElement("td");
//         setsCell.textContent = sets;
//         row.appendChild(setsCell);
//         const repsCell = document.createElement("td");
//         repsCell.textContent = reps;
//         row.appendChild(repsCell);
//         tableBody.appendChild(row);
//       });
//       table.appendChild(tableHead);
//       table.appendChild(tableBody);
//       workoutDataContainer.appendChild(table);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }
// ///// COMPLETE BUTTON /////
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
//         const response = await fetch("/api/add-workout-data", {
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
// async function fetchExerciseData() {
//   try {
//     const response = await fetch("/api/getExerciseData");
//     const data = await response.json();
//     return data.exerciseData;
//   } catch (error) {
//     console.error("Error fetching exercise data:", error);
//     return [];
//   }
// }
// async function renderProgramInfo() {
//   const programInfoContainer = document.querySelector(".renderProgramInfo");
//   if (programInfoContainer) {
//     const programData = await fetchProgramData();
//     programData.forEach((program) => {
//       const programDiv = document.createElement("div");
//       programDiv.textContent = `Program: ${program.name}, Level: ${program.level}`;
//       programInfoContainer.appendChild(programDiv);
//     });
//   }
// }
// document.addEventListener("DOMContentLoaded", async () => {
//   const selectedProgramString = localStorage.getItem("selectedProgram");
//   if (selectedProgramString) {
//     const selectedProgram = JSON.parse(selectedProgramString);
//     const programInfoContainer = document.querySelector(".renderProgramInfo");
//     if (programInfoContainer) {
//       programInfoContainer.innerHTML = `
//         <h2>Your Program:</h2>
//         <p>Name: ${selectedProgram.name}</p>
//         <p>Level: ${selectedProgram.level}</p>
//         <p>Days a Week: ${selectedProgram.days}</p>
//         <p>Equipment: ${selectedProgram.equipment}</p>
//         <p>Workout Time: ${selectedProgram.workoutTime}</p>
//       `;
//     }
//     const renderWorkoutTable = async () => {
//       try {
//         const response = await fetch("/api/getWorkoutData");
//         const data = await response.json();
//         const workoutData = data.workoutData[selectedProgram._id];
//         const workoutTableContainer =
//           document.getElementById("renderWorkoutTable");
//         if (workoutTableContainer) {
//           workoutTableContainer.innerHTML = `
//             <h3>Your workout</h3>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Exercise</th>
//                   <th>Image</th>
//                   <th>Sets</th>
//                   <th>Reps</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 ${workoutData
//                   .map(
//                     (exercise) => `
//                   <tr>
//                     <td>${exercise.exercise}</td>
//                     <td>${exercise.image}</td>
//                     <td>${exercise.sets}</td>
//                     <td>${exercise.reps}</td>
//                   </tr>
//                 `
//                   )
//                   .join("")}
//               </tbody>
//             </table>
//           `;
//         }
//       } catch (error) {
//         console.error("Error fetching workout data:", error);
//       }
//     };
//     renderWorkoutTable();
//   }
// });
// document.addEventListener("DOMContentLoaded", () => {
//   renderProgramInfo();
// });
