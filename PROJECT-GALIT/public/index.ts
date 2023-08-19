///// USER /////

function handleRegistration(eve: any) {
  try {
    eve.preventDefault();
    const userName = eve.target.elements.userName.value;
    const userPassword = eve.target.elements.userPassword.value;
    if (!userName || !userPassword)
      throw new Error("userName or password is missing");
    const addUser: any = { userName, userPassword };

    fetch("/api/users/register-user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data:", data);
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}
// -------------------------------------------------------------------------//
function handleUserLogin(eve: any) {
  try {
    eve.preventDefault();
    const userName = eve.target.elements.userName.value;
    const userPassword = eve.target.elements.userPassword.value;
    if (!userName || !userPassword)
      throw new Error("userName or password is missing");
    const addUser: any = { userName, userPassword };

    fetch("/api/users/login-user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data:", data);
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}
// -------------------------------------------------------------------------//
async function handleShowUser(eve: any) {
  try {
    const response = await fetch("/api/users/get-user");
    const data = await response.json();
    console.log("data", data);
    const { databaseUser } = data;
    const userHtml = document.querySelector("#userName") as HTMLDivElement;

    if (!databaseUser)
      throw new Error("problem with Showing Database User function");
    if (!userHtml) throw new Error("No user element on DOM");
    userHtml.innerHTML = databaseUser.userName;
  } catch (error) {
    console.log(error);
  }
}

///// CREATE /////
const maxTables = 5;
let tableCounter = 0;

const addButton = document.getElementById("add-table-button");
console.log(addButton);

if (addButton) {
  addButton.addEventListener("click", function () {
    if (tableCounter < maxTables) {
      tableCounter++;

      const programForm = document.getElementById(
        "programForm"
      ) as HTMLFormElement;
      if (programForm) {
        const table = document.createElement("table");
        programForm.appendChild(table);

        const tableBody = document.createElement("tbody");
        table.appendChild(tableBody);

        const tableHeader = document.createElement("thead");
        const headerRow = document.createElement("tr");
        const headers = ["Exercise", "Image", "Sets", "Reps"];
        for (const headerText of headers) {
          const headerCell = document.createElement("th");
          headerCell.textContent = headerText;
          headerRow.appendChild(headerCell);
        }
        tableHeader.appendChild(headerRow);
        table.appendChild(tableHeader);

        for (let i = 1; i <= 8; i++) {
          const row = document.createElement("tr");

          const exerciseCell = document.createElement("td");
          exerciseCell.innerHTML = `<input type="text" name="exercise_${i}_${tableCounter}">`;
          row.appendChild(exerciseCell);

          const imageCell = document.createElement("td");
          imageCell.innerHTML = `<input type="file" accept="image/*" name="image_${i}_${tableCounter}">`;
          row.appendChild(imageCell);

          const setsCell = document.createElement("td");
          setsCell.innerHTML = `<input type="number" name="sets_${i}_${tableCounter}" min="1">`;
          row.appendChild(setsCell);

          const repsCell = document.createElement("td");
          repsCell.innerHTML = `<input type="number" name="reps_${i}_${tableCounter}" min="1">`;
          row.appendChild(repsCell);

          tableBody.appendChild(row);
        }
      }
    } else {
      alert("Maximum number of tables reached.");
    }
  });
}

interface Info {
  _id: string;
  Days: number;
  Equipment: string;
  level: string;
  workoutTime: string;
}

interface Table {
  Exercise: string;
  image: string;
  sets: number;
  reps: number;
}

async function fetchAllData(): Promise<Info[]> {
  try {
    const response = await fetch("/program/get-program-data");
    const data = await response.json();
    return data.allProgramData;
  } catch (error) {
    console.error("Error fetching program data:", error);
    return [];
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const selectedProgramString = localStorage.getItem("selectedProgram");

  if (selectedProgramString) {
    const selectedProgram: Info = JSON.parse(selectedProgramString);

    const programInfoContainer = document.querySelector(".renderProgramInfo");
    if (programInfoContainer) {
      programInfoContainer.innerHTML = `
          <h2>Your Program:</h2>
          <p>Days a Week: ${selectedProgram.Days}</p>
          <p>Equipment: ${selectedProgram.Equipment}</p>
          <p>Level: ${selectedProgram.level}</p>
          <p>Workout Time: ${selectedProgram.workoutTime}</p>
        `;
    }

    const renderWorkoutTable = async () => {
      try {
        const response = await fetch("/program/getWorkoutData");
        const data = await response.json();
        const workoutData: Table[] = data.workoutData[selectedProgram._id];
        const workoutTableContainer =
          document.getElementById("renderWorkoutTable");

        if (workoutTableContainer) {
          workoutTableContainer.innerHTML = `
              <h3>Your workout</h3>
              <table>
                <thead>
                  <tr>
                    <th>Exercise</th>
                    <th>Image</th>
                    <th>Sets</th>
                    <th>Reps</th>
                  </tr>
                </thead>
                <tbody>
                  ${workoutData
                    .map(
                      (exercise) => `
                    <tr>
                      <td>${exercise.Exercise}</td>
                      <td><img src="${exercise.image}" alt="Exercise Image"></td>
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

    renderWorkoutTable();
  } else {
    console.error("data not exist");
  }
});
