// Variables
const uiElement = document.querySelector(".renderProgramInfo");
const workoutTableContainer = document.getElementById("renderWorkoutTable");
let doneBtn = document.getElementById("completeButton") as HTMLButtonElement;
let workout: any = {};

// get all workout from api
const getProgram = async () => {
  // take id from url

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  try {
    // get workout from api
    const response = await fetch(`/fitnessApi/workout/getWorkout/${id}`);
    const data = await response.json();
    if (data.ok && data.workout) {
      workout = data.workout;
    }
    showInPage();
    renderWorkoutTable();
  } catch (err) {
    console.log(err);
  }
};

getProgram();

// To show program category in UI
const showInPage = () => {
  const html = `
    <a class="card" href = "/userPrograms/userProgram.html?id=${workout._id}">
    <div class="card-header">
        <h2>Category Details</h2>
        <img src="/images/dumbell.jpeg" alt="Workout Image 1">
    </div>
    <div class="card-body">
        <h3>${workout.category.Title}</h3>
        <ul>
            <li>
              <p><i class="fas fa-signal"
                  style="color: blue;"
                ></i>Level:</p>
               <span class="level">${workout.category.Level}</span>
              </li>
              
            <li>
              <p>
                <i class="fas fa-calendar-alt" style="color: green;"></i> Days:
              </p>
              <span class="days">${workout.category.Days} Days a week</span>
            </li>

            <li>
              <p>
                <i class="fas fa-dumbbell"
                  style="color: red;"
                ></i>Equipment:
              </p> 
              <span class="equipment"
                
              >${workout.category.Equipment}</span></li>
            <li>
              <p>
                <i class="fas fa-clock"
                  style="color: orange;"
                ></i>Time:
              </p>
               <span class="time"> ${workout.category.WorkoutTime}</span>
            </li>
        </ul>
    </div>
</a>
`;

  if (!uiElement) return;
  uiElement.insertAdjacentHTML("beforeend", html);
};

// Render Workout table with exercies on UI
const renderWorkoutTable = async () => {
  console.log(workout);
  try {
    if (workoutTableContainer) {
      workoutTableContainer.innerHTML = `
              ${workout.program
                .map(
                  (exercise: any) => `
                <tr>
                  <td>${exercise.Exercise}</td>
                  <td><img src="${exercise.image}" alt="Exercise Image" /></td>
                  <td>${exercise.sets}</td>
                  <td>${exercise.reps}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        `;
    }
  } catch (error) {
    console.error("Error fetching workout data:", error);
  }
};

// ----------
if (doneBtn) {
  let isCompleted = false;

  doneBtn.addEventListener("click", async () => {
    if (!isCompleted) {
      doneBtn.textContent = "Workout Completed!";
      doneBtn.classList.add("completed");
      isCompleted = true;
    }
  });
}

// -------
// doneBtn.addEventListener("click", async () => {
//   //move to home page
//   window.location.href = "../home/home.html";
// });
