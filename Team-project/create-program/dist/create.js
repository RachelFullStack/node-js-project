var maxTables = 5;
var tableCounter = 0;
document
    .getElementById("add-table-button")
    .addEventListener("click", function () {
    if (tableCounter < maxTables) {
        tableCounter++;
        var tableContainer = document.getElementById("table-container");
        var table = document.createElement("table");
        tableContainer.appendChild(table);
        var tableBody = document.createElement("tbody");
        table.appendChild(tableBody);
        var tableHeader = document.createElement("thead");
        var headerRow = document.createElement("tr");
        var headers = ["Exercise", "Image", "Sets", "Reps"];
        for (var _i = 0, headers_1 = headers; _i < headers_1.length; _i++) {
            var headerText = headers_1[_i];
            var headerCell = document.createElement("th");
            headerCell.textContent = headerText;
            headerRow.appendChild(headerCell);
        }
        tableHeader.appendChild(headerRow);
        table.appendChild(tableHeader);
        for (var i = 1; i <= 8; i++) {
            var row = document.createElement("tr");
            var exerciseCell = document.createElement("td");
            exerciseCell.innerHTML = "<input type=\"text\" name=\"exercise_" + i + "_" + tableCounter + "\">";
            row.appendChild(exerciseCell);
            var imageCell = document.createElement("td");
            imageCell.innerHTML = "<input type=\"file\" accept=\"image/*\" name=\"image_" + i + "_" + tableCounter + "\">";
            row.appendChild(imageCell);
            var setsCell = document.createElement("td");
            setsCell.innerHTML = "<input type=\"number\" name=\"sets_" + i + "_" + tableCounter + "\" min=\"1\">";
            row.appendChild(setsCell);
            var repsCell = document.createElement("td");
            repsCell.innerHTML = "<input type=\"number\" name=\"reps_" + i + "_" + tableCounter + "\" min=\"1\">";
            row.appendChild(repsCell);
            tableBody.appendChild(row);
        }
    }
    else {
        alert("Maximum number of tables reached.");
    }
});
document.getElementById("submit-button").addEventListener("click", function () {
    var programForm = document.getElementById("program-form");
    if (programForm) {
        programForm.submit();
    }
});
