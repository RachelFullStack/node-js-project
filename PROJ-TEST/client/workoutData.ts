///// COMPLETE BUTTON /////
const completeButton = document.getElementById(
    "completeButton"
  ) as HTMLButtonElement;

  if (completeButton) {
    let isCompleted = false;

    completeButton.addEventListener("click", async () => {
      if (!isCompleted) {
        completeButton.textContent = "Workout Completed!";
        completeButton.classList.add("completed");
        isCompleted = true;

        const workoutData: any[] = (window as any).workoutData || [];
        try {
          const response = await fetch("/program/add-workout-data", {
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

///// WORKOUT TABLE /////
async function fetchWorkoutData() {
  try {
    const response = await fetch("/api/get-workout-data");
    const data = await response.json();
    const workoutDataContainer = document.getElementById(
      "workoutDataContainer"
    ) as HTMLElement;

    workoutDataContainer.innerHTML = "";

    data.allData.forEach((tableData: any, tableIndex: number) => {
      const table = document.createElement("table");
      const tableHead = document.createElement("thead");
      const tableBody = document.createElement("tbody");

      const headerRow = document.createElement("tr");
      const headers = ["Exercise", "Image", "Sets", "Reps"];
      for (const headerText of headers) {
        const headerCell = document.createElement("th");
        headerCell.textContent = headerText;
        headerRow.appendChild(headerCell);
      }
      tableHead.appendChild(headerRow);

      tableData.forEach((exercise: any) => {
        const row = document.createElement("tr");
        const { exercise: exerciseText, image, sets, reps } = exercise;

        const exerciseCell = document.createElement("td");
        exerciseCell.textContent = exerciseText;
        row.appendChild(exerciseCell);

        const imageCell = document.createElement("td");
        const imageElement = document.createElement("img");
        imageElement.src = image;
        imageElement.alt = exerciseText;
        imageCell.appendChild(imageElement);
        row.appendChild(imageCell);

        const setsCell = document.createElement("td");
        setsCell.textContent = sets;
        row.appendChild(setsCell);

        const repsCell = document.createElement("td");
        repsCell.textContent = reps;
        row.appendChild(repsCell);

        tableBody.appendChild(row);
      });

      table.appendChild(tableHead);
      table.appendChild(tableBody);
      workoutDataContainer.appendChild(table);
    });
  } catch (error) {
    console.error(error);
  }
}
