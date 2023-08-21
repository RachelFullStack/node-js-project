const maxTables = 5;
let tableCounter = 0;
let fill = 0;

const addButton = document.getElementById("add-table-button");
const submitButton = document.getElementById("submit-button");

let titleA = document.getElementById("title") as HTMLSelectElement;
let levelB = document.getElementById("filter-level") as HTMLSelectElement;
let daysC = document.getElementById("filter-days") as HTMLSelectElement;
let equipmentD = document.getElementById(
  "filter-equipment"
) as HTMLSelectElement;
let timeE = document.getElementById("filter-time") as HTMLSelectElement;

// add table
const addTable = () => {
  if (tableCounter < maxTables) {
    tableCounter++;

    const programForm = document.getElementById(
      "table-container"
    ) as HTMLFormElement;
    if (programForm) {
      const table = document.createElement("table");
      programForm.appendChild(table);

      const tableBody = document.createElement("tbody");
      table.appendChild(tableBody);

      if (tableCounter === 1) {
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
      }
      for (let i = 1; i <= 1; i++) {
        const row = document.createElement("tr");

        const exerciseCell = document.createElement("td");
        exerciseCell.innerHTML = `<input type="text" name="exercise_${i}_${tableCounter}" placeholder="Exercise" />`;
        row.appendChild(exerciseCell);

        const imageCell = document.createElement("td");
        imageCell.innerHTML = `<input type="text" name="image_${i}_${tableCounter}" placeholder="Image" />`;
        row.appendChild(imageCell);

        const setsCell = document.createElement("td");
        setsCell.innerHTML = `<input type="number" name="sets_${i}_${tableCounter}" min="1" placeholder="Sets" />`;
        row.appendChild(setsCell);
        const repsCell = document.createElement("td");
        repsCell.innerHTML = `<input type="number" name="reps_${i}_${tableCounter}" min="1" placeholder="Reps" />`;
        row.appendChild(repsCell);

        tableBody.insertAdjacentElement("afterbegin", row);
      }
    }
  } else {
    alert("Maximum number of tables reached.");
  }
};

// add category
const addCategory = async () => {
  const categoryObj = {
    Title: titleA.value,
    Level: levelB.value,
    Days: daysC.value,
    Equipment: equipmentD.value,
    WorkoutTime: timeE.value,
  };
  console.log(categoryObj);

  const response = await fetch("/fitnessApi/workout/addCategory", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(categoryObj),
  });

  const result = await response.json();

  return result.id;
};

// add program
const addProgram = async (id: string, programData: any) => {
  const programObj = {
    CategoryId: id,
    programData: programData,
  };

  const response = await fetch("/fitnessApi/workout/addWorkout", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(programObj),
  });

  const result = await response.json();

  console.log(result);

  if (result.ok) {
    alert("Program added successfully");
    window.location.href = "../home/home.html";
  }
};

// to fetch the data that submitted
const submitData = async () => {
  try {
    const programForm = document.getElementById(
      "table-container"
    ) as HTMLFormElement;

    if (programForm) {
      const programData: Array<
        Array<{ Exercise: string; image: File; sets: number; reps: number }>
      > = [];

      for (let tableIndex = 1; tableIndex <= tableCounter; tableIndex++) {
        const tableData: {
          Exercise: string;
          image: File;
          sets: number;
          reps: number;
        }[] = [];

        for (let i = 1; i <= 1; i++) {
          console.log(`for is here`);

          const exerciseInput = document.querySelector(
            `#table-container > table td > input[name^=exercise_${i}_${tableIndex}]`
          ) as any;

          const Exercise = exerciseInput.value;

          const image111 = document.querySelector(
            `#table-container > table td > input[name^=image_${i}_${tableIndex}]`
          ) as any;
          const image = image111.value;

          const setsInput = document.querySelector(
            `#table-container > table td > input[name^=sets_${i}_${tableIndex}]`
          ) as any;

          const sets = setsInput.value;

          const repsInput = document.querySelector(
            `#table-container > table td > input[name^=reps_${i}_${tableIndex}]`
          ) as any;

          const reps = repsInput.value;

          tableData.push({ Exercise, image, sets, reps });
        }

        programData.push(tableData);
      }
      console.log(programData);

      // add category
      const id = await addCategory();
      console.log(id);

      await addProgram(id, programData);
      window.location.href = "../home/home.html";
    }
  } catch (error) {
    console.log(error);
  }
};

if (addButton) addButton.addEventListener("click", addTable);

if (submitButton) submitButton.addEventListener("click", submitData);
