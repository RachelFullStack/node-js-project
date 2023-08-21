let workouts: any[] = [];
let filteredWorkouts: any[] = [];

// images to choose from randomly
const images = [
  "dumbell.jpeg",
  "dumbell2.avif",
  "dumbell-3.avif",
  "dumbell-4.webp",
  "dumbell-5.jpeg",
];

const workoutCardContainer = document.querySelector(
  ".card-container"
) as HTMLDivElement;
let filterBtn = document.getElementById(
  "apply-filter-button"
) as HTMLButtonElement;
let levels = document.getElementById("filter-level") as HTMLSelectElement;
let days = document.getElementById("filter-days") as HTMLSelectElement;
let equipment = document.getElementById(
  "filter-equipment"
) as HTMLSelectElement;
let time = document.getElementById("filter-time") as HTMLSelectElement;
let userNameE = document.getElementById("userName") as HTMLSpanElement;

//  function to get user role and name
const getUserName = async () => {
  const params = new URLSearchParams(window.location.search);
  const userName = params.get("userName");
  const role = params.get("role");

  if (userName != null) localStorage.setItem("username", userName);
  if (role != null) localStorage.setItem("role", role);

  const us = localStorage.getItem("username");
  const rl = localStorage.getItem("role");
  if (!us) {
  } else userNameE.innerHTML = us;
  if (rl === "admin") {
    // document.getElementById("admin")?.style.style;
    const adminE = document.getElementById("admin") as HTMLAnchorElement;
    if (adminE) adminE.style.display = "block";
  }
};
getUserName();

// Getting all workouts:
const getWorkouts = async () => {
  try {
    const response = await fetch("/fitnessApi/workout/getWorkouts");
    const data = await response.json();
    console.log(data);
    workouts = data.workouts;
    filteredWorkouts = workouts;
    console.log(workouts);
    showInUI();
  } catch (err) {
    console.log(err);
  }
};

// function to render workouts to screen:
const showInUI = () => {
  workoutCardContainer.innerHTML = "";
  if (filteredWorkouts.length === 0) {
    workoutCardContainer.innerHTML = `<h2>No workouts found</h2>`;
    return;
  }

  filteredWorkouts.forEach((workout: any) => {
    console.log(workout);
    const imgIndex = Math.floor(Math.random() * 5);
    console.log(imgIndex);

    const html = `
        <a class="card" href = "/userPrograms/userProgram.html?id=${workout._id}">
        <div class="card-header">
            <img src="/images/${images[imgIndex]}" alt = "Workout Image" />
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

    workoutCardContainer.insertAdjacentHTML("beforeend", html);
  });
};
getWorkouts();

// function to the user: filter program data
const filterData = (e: any) => {
  console.log("ok,");
  e.preventDefault();
  console.log("filtering data");
  const level = levels.value;
  const day = days.value;
  const equip = equipment.value;
  const ti = time.value;

  filteredWorkouts = workouts
    .filter((workout: any) => {
      if (level !== "all") {
        return workout.category.Level === level;
      } else {
        return workout;
      }
    })
    .filter((workout: any) => {
      if (day !== "all") {
        return workout.category.Days === day;
      } else {
        return workout;
      }
    })
    .filter((workout: any) => {
      if (equip !== "all") {
        return workout.category.Equipment === equip;
      } else {
        return workout;
      }
    })
    .filter((workout: any) => {
      if (ti !== "all") {
        return workout.category.WorkoutTime === ti;
      } else {
        return workout;
      }
    });

  showInUI();
};

filterBtn.addEventListener("click", filterData);
