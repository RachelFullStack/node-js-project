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

// ----------------------------xxxxxx--------------------------------------//
// ----------------------------create---------------------------------------//
// ----------------------------xxxxxx--------------------------------------//

const maxTables = 5;
let tableCounter = 0;

const addButton = document.getElementById("add-table-button");
if (addButton) {
  addButton.addEventListener("click", function () {
    if (tableCounter < maxTables) {
      tableCounter++;

      const tableContainer = document.getElementById("table-container");
      if (tableContainer) {
        const table = document.createElement("table");
        tableContainer.appendChild(table);

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
  const inputField = document.getElementById(
    "someInputField"
  ) as HTMLInputElement;
  if (!inputField.value) {
    alert("Please fill out the required field.");
    return false;
  }
  return true;
}
const submitButton = document.getElementById("submit-button");
if (submitButton) {
  submitButton.addEventListener("click", async () => {
    const programForm = document.getElementById(
      "program-form"
    ) as HTMLFormElement;
    if (programForm) {
      const isValid = validateForm();

      if (isValid) {
        const programData: Array<
          Array<{ exercise: string; image: File; sets: number; reps: number }>
        > = [];
        for (let tableIndex = 1; tableIndex <= tableCounter; tableIndex++) {
          const tableData: {
            exercise: string;
            image: File;
            sets: number;
            reps: number;
          }[] = [];
          for (let i = 1; i <= 8; i++) {
            const exercise =
              programForm.elements[`exercise_${i}_${tableIndex}`]?.value;
            const image =
              programForm.elements[`image_${i}_${tableIndex}`]?.files[0];
            const sets = programForm.elements[`sets_${i}_${tableIndex}`]?.value;
            const reps = programForm.elements[`reps_${i}_${tableIndex}`]?.value;

            tableData.push({ exercise, image, sets, reps });
          }
          programData.push(tableData);
        }

        try {
          const response = await fetch("/api/add-program", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(programData),
          });
          const result = await response.json();
          console.log(result);
        } catch (error) {
          console.error(error);
        }

        window.location.href = "./program.html";
      }
    }
  });
}

// ---------------------------------------------------------------------------//
// ----------------------------WELCOME---------------------------------------//
// ---------------------------------------------------------------------------//

// import { fetchProgramData } from "../api";

// const storedUsername = localStorage.getItem("username");
// if (storedUsername) {
//   const usernamePlaceholder = document.getElementById("username-placeholder");
//   if (usernamePlaceholder) {
//     usernamePlaceholder.textContent = storedUsername;
//   }
// }

// document.addEventListener("DOMContentLoaded", async () => {
//   const programListContainer = document.getElementById("workout-list");

//   if (programListContainer) {
//     const programData = await fetchProgramData();

//     programData.forEach((program) => {
//       const programBox = document.createElement("div");
//       programBox.classList.add("program-box");
//       programBox.innerHTML = `
//         <h2>${program.name}</h2>
//         <p>Level: ${program.level}</p>
//         <p>Days a Week: ${program.days}</p>
//         <p>Equipment: ${program.equipment}</p>
//         <p>Workout Time: ${program.workoutTime}</p>
//       `;
//       programBox.addEventListener("click", () => {
//         localStorage.setItem("selectedProgram", JSON.stringify(program));
//         window.location.href = "./program.html";
//       });

//       programListContainer.appendChild(programBox);
//     });
//   }
// });
