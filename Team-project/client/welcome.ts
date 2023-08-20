// import { fetchProgramData } from "../client/dist/api";

const storedUsername = localStorage.getItem("username");
if (storedUsername) {
  const usernamePlaceholder = document.getElementById("username-placeholder");
  if (usernamePlaceholder) {
    usernamePlaceholder.textContent = storedUsername;
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const programListContainer = document.getElementById("workout-list");
  console.log(programListContainer);

  if (programListContainer) {
    const programData = await fetchProgramData();

    console.log(programData);
    if (programData.length > 0) {
      programData.forEach((program) => {
        const programBox = document.createElement("div");
        programBox.classList.add("program-box");
        programBox.innerHTML = `
      <h2>${program.name}</h2>
      <p>Level: ${program.level}</p>
      <p>Days a Week: ${program.days}</p>
      <p>Equipment: ${program.equipment}</p>
      <p>Workout Time: ${program.workoutTime}</p>
    `;
        programBox.addEventListener("click", () => {
          localStorage.setItem("selectedProgram", JSON.stringify(program));
          window.location.href = "../Program/program.html";
        });

        programListContainer.appendChild(programBox);
      });
    } else {
      programListContainer.innerHTML = `<div> No Data </div>`;
    }
  }
});
