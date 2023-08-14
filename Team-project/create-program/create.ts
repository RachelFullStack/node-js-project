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

const submitButton = document.getElementById("submit-button");
if (submitButton) {
  submitButton.addEventListener("click", async () => {
    const programForm = document.getElementById(
      "program-form"
    ) as HTMLFormElement;
    if (programForm) {
      const isValid = validateForm();

      if (isValid) {
        programForm.submit();

        window.location.href = "../program/program.html";
      }
    }
  });
}

function validateForm() {
  return true;
}
