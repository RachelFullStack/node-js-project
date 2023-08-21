var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var maxTables = 5;
var tableCounter = 0;
var fill = 0;
var addButton = document.getElementById("add-table-button");
var submitButton = document.getElementById("submit-button");
var titleA = document.getElementById("title");
var levelB = document.getElementById("filter-level");
var daysC = document.getElementById("filter-days");
var equipmentD = document.getElementById("filter-equipment");
var timeE = document.getElementById("filter-time");
// add table
var addTable = function () {
    if (tableCounter < maxTables) {
        tableCounter++;
        var programForm = document.getElementById("table-container");
        if (programForm) {
            var table = document.createElement("table");
            programForm.appendChild(table);
            var tableBody = document.createElement("tbody");
            table.appendChild(tableBody);
            if (tableCounter === 1) {
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
            }
            for (var i = 1; i <= 1; i++) {
                var row = document.createElement("tr");
                var exerciseCell = document.createElement("td");
                exerciseCell.innerHTML = "<input type=\"text\" name=\"exercise_" + i + "_" + tableCounter + "\" placeholder=\"Exercise\" />";
                row.appendChild(exerciseCell);
                var imageCell = document.createElement("td");
                imageCell.innerHTML = "<input type=\"text\" name=\"image_" + i + "_" + tableCounter + "\" placeholder=\"Image\" />";
                row.appendChild(imageCell);
                var setsCell = document.createElement("td");
                setsCell.innerHTML = "<input type=\"number\" name=\"sets_" + i + "_" + tableCounter + "\" min=\"1\" placeholder=\"Sets\" />";
                row.appendChild(setsCell);
                var repsCell = document.createElement("td");
                repsCell.innerHTML = "<input type=\"number\" name=\"reps_" + i + "_" + tableCounter + "\" min=\"1\" placeholder=\"Reps\" />";
                row.appendChild(repsCell);
                tableBody.insertAdjacentElement("afterbegin", row);
            }
        }
    }
    else {
        alert("Maximum number of tables reached.");
    }
};
// add category
var addCategory = function () { return __awaiter(_this, void 0, void 0, function () {
    var categoryObj, response, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                categoryObj = {
                    Title: titleA.value,
                    Level: levelB.value,
                    Days: daysC.value,
                    Equipment: equipmentD.value,
                    WorkoutTime: timeE.value
                };
                console.log(categoryObj);
                return [4 /*yield*/, fetch("/fitnessApi/workout/addCategory", {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(categoryObj)
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                result = _a.sent();
                return [2 /*return*/, result.id];
        }
    });
}); };
// add program
var addProgram = function (id, programData) { return __awaiter(_this, void 0, void 0, function () {
    var programObj, response, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                programObj = {
                    CategoryId: id,
                    programData: programData
                };
                return [4 /*yield*/, fetch("/fitnessApi/workout/addWorkout", {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(programObj)
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                result = _a.sent();
                console.log(result);
                if (result.ok) {
                    alert("Program added successfully");
                    window.location.href = "../home/home.html";
                }
                return [2 /*return*/];
        }
    });
}); };
// to fetch the data that submitted
var submitData = function () { return __awaiter(_this, void 0, void 0, function () {
    var programForm, programData, tableIndex, tableData, i, exerciseInput, Exercise, image111, image, setsInput, sets, repsInput, reps, id, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                programForm = document.getElementById("table-container");
                if (!programForm) return [3 /*break*/, 3];
                programData = [];
                for (tableIndex = 1; tableIndex <= tableCounter; tableIndex++) {
                    tableData = [];
                    for (i = 1; i <= 1; i++) {
                        console.log("for is here");
                        exerciseInput = document.querySelector("#table-container > table td > input[name^=exercise_" + i + "_" + tableIndex + "]");
                        Exercise = exerciseInput.value;
                        image111 = document.querySelector("#table-container > table td > input[name^=image_" + i + "_" + tableIndex + "]");
                        image = image111.value;
                        setsInput = document.querySelector("#table-container > table td > input[name^=sets_" + i + "_" + tableIndex + "]");
                        sets = setsInput.value;
                        repsInput = document.querySelector("#table-container > table td > input[name^=reps_" + i + "_" + tableIndex + "]");
                        reps = repsInput.value;
                        tableData.push({ Exercise: Exercise, image: image, sets: sets, reps: reps });
                    }
                    programData.push(tableData);
                }
                console.log(programData);
                return [4 /*yield*/, addCategory()];
            case 1:
                id = _a.sent();
                console.log(id);
                return [4 /*yield*/, addProgram(id, programData)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3: return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
if (addButton)
    addButton.addEventListener("click", addTable);
if (submitButton)
    submitButton.addEventListener("click", submitData);
