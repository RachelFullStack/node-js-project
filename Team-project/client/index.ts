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

// // ---- create-------
const maxTables = 5;
let tableCounter = 0;

const addButton = document.getElementById("add-table-button");
console.log(addButton);

if (addButton) {
  addButton.addEventListener("click", function () {
    if (tableCounter < maxTables) {
      tableCounter++;

      // const tableContainer = document.getElementById("table-container");
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

function validateForm() {
  const inputFields = document.querySelectorAll("#programForm > select") as any;

  console.log(inputFields);

  inputFields.forEach((input) => {
    console.log(input.value);
  });
  // const inputField = document.getElementById("programForm") as HTMLInputElement;

  // console.log(inputField);

  // if (!inputField.value) {
  //   alert("Please fill out the required field.");
  //   return false;
  //   //     "someInputField"
  // }
  return true;
}
const submitButton = document.getElementById("submit-button");
if (submitButton) {
  submitButton.addEventListener("click", async () => {
    try {
      const programForm = document.getElementById(
        "programForm"
      ) as HTMLFormElement;

      if (programForm) {
        // const isValid = validateForm();

        // if (isValid) {
        const programData: Array<
          Array<{ exercise: string; image: File; sets: number; reps: number }>
        > = [];

        const inputFields = document.querySelectorAll(
          "#programForm > select"
        ) as any;

        console.log(inputFields);

        const dataObject = {};
        inputFields.forEach((input, index) => {
          console.log(input.value);
          console.log(input.id);
          dataObject[input.id] = input.value;
        });

        console.log(dataObject);

        for (let tableIndex = 1; tableIndex <= tableCounter; tableIndex++) {
          const tableData: {
            exercise: string;
            image: File;
            sets: number;
            reps: number;
          }[] = [];

          //---KKKK Add----

          // const tableInputsaaaa = document.querySelectorAll(
          //   "#programForm > table td > input "
          // );

          // console.log(tableInputsaaaa);

          for (let i = 1; i <= 8; i++) {
            console.log(`for is here`);

            const exerciseInput = document.querySelector(
              `#programForm > table td > input[name^=exercise_${i}]`
            ) as any;

            const exercise = exerciseInput.value;

            const image111 = document.querySelector(
              `#programForm > table td > input[name^=image_${i}]`
            ) as any;
            const image = image111.value;

            const setsInput = document.querySelector(
              `#programForm > table td > input[name^=sets_${i}]`
            ) as any;

            const sets = setsInput.value;

            const repsInput = document.querySelector(
              `#programForm > table td > input[name^=reps_${i}]`
            ) as any;

            const reps = repsInput.value;

            tableData.push({ exercise, image, sets, reps });
          }

          // console.log(tableData);

          //tableData.push({ exercise, image, sets, reps }); [{},{},{}]

          //-----OLD---
          // for (let i = 1; i <= 8; i++) {
          //   const exercise =
          //     programForm.elements[`exercise_${i}_${tableIndex}`]?.value;
          //   // console.log(programForm.elements[`exercise_${i}_${tableIndex}`]);

          //   const image =
          //     programForm.elements[`image_${i}_${tableIndex}`]?.files[0];
          //   const sets = programForm.elements[`sets_${i}_${tableIndex}`]?.value;
          //   const reps = programForm.elements[`reps_${i}_${tableIndex}`]?.value;

          //   tableData.push({ exercise, image, sets, reps });
          // }
          programData.push(tableData); //[[{},{}]]
        }

        // console.log(programData);

        const response = await fetch("/program/add-program", {
          method: "POST",
          headers: {
            Accept: "application/json",

            "Content-Type": "application/json",
          },
          body: JSON.stringify({ dataObject, programData }),
        });
        const result = await response.json();
        console.log("result:", result);
        console.log("programData:", programData);
        // xxxxxxxxx
        const response2 = await fetch("/program/add-category", {
          method: "POST",
          headers: {
            Accept: "application/json",

            "Content-Type": "application/json",
          },
          body: JSON.stringify({ dataObject }),
        });
        const result2 = await response2.json();
        console.log("result2:", result2);
        console.log("dataObject:", dataObject);

        // window.location.href = "./welcome.html";
      }
    } catch (error) {
      console.log(error);
    }
  });
}

// // ----program

// async function fetchExerciseData() {
//   try {
//     const response = await fetch("/program/getExerciseData");
//     const data = await response.json();
//     return data.exerciseData;
//   } catch (error) {
//     console.error("Error fetching exercise data:", error);
//     return [];
//   }
// }

// מה שהיה בקובץ היי פי אאי
async function fetchProgramData() {
  try {
    const response = await fetch("/program/get-program-data");
    const data = await response.json();
    return data.allProgramData;
  } catch (error) {
    console.error("Error fetching program data:", error);
    return [];
  }
}
// ----------------------------------------------------
async function renderProgramInfo() {
  const programInfoContainer = document.querySelector(".renderProgramInfo");

  if (programInfoContainer) {
    const programData = await fetchProgramData();

    console.log(programData);

    programData.forEach((program) => {
      const programDiv = document.createElement("div");
      programDiv.textContent = `Program: ${program.name}, Level: ${program.level}`;
      programInfoContainer.appendChild(programDiv);
    });
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const selectedProgramString = localStorage.getItem("selectedProgram");

  if (selectedProgramString) {
    const selectedProgram = JSON.parse(selectedProgramString);
    const programInfoContainer = document.querySelector(".renderProgramInfo");
    if (programInfoContainer) {
      programInfoContainer.innerHTML = `
        <h2>Your Program:</h2>
        <p>Name: ${selectedProgram.name}</p>
        <p>Level: ${selectedProgram.level}</p>
        <p>Days a Week: ${selectedProgram.days}</p>
        <p>Equipment: ${selectedProgram.equipment}</p>
        <p>Workout Time: ${selectedProgram.workoutTime}</p>
      `;
    }

    const renderWorkoutTable = async () => {
      try {
        const response = await fetch("/program/getWorkoutData");
        const data = await response.json();
        const workoutData = data.workoutData[selectedProgram._id];
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
                    <td>${exercise.exercise}</td>
                    <td>${exercise.image}</td>
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
    //inform the user that the data is not exist
  }
});
document.addEventListener("DOMContentLoaded", () => {
  renderProgramInfo();
});
