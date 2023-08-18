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
function handleRegistration(eve) {
    try {
        eve.preventDefault();
        var userName = eve.target.elements.userName.value;
        var userPassword = eve.target.elements.userPassword.value;
        if (!userName || !userPassword)
            throw new Error("userName or password is missing");
        var addUser = { userName: userName, userPassword: userPassword };
        fetch("/api/users/register-user", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addUser)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log("data:", data);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
// -------------------------------------------------------------------------//
function handleUserLogin(eve) {
    try {
        eve.preventDefault();
        var userName = eve.target.elements.userName.value;
        var userPassword = eve.target.elements.userPassword.value;
        if (!userName || !userPassword)
            throw new Error("userName or password is missing");
        var addUser = { userName: userName, userPassword: userPassword };
        fetch("/api/users/login-user", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addUser)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log("data:", data);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
// -------------------------------------------------------------------------//
function handleShowUser(eve) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, databaseUser, userHtml, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/api/users/get-user")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log("data", data);
                    databaseUser = data.databaseUser;
                    userHtml = document.querySelector("#userName");
                    if (!databaseUser)
                        throw new Error("problem with Showing Database User function");
                    if (!userHtml)
                        throw new Error("No user element on DOM");
                    userHtml.innerHTML = databaseUser.userName;
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// // ---- create-------
var maxTables = 5;
var tableCounter = 0;
var addButton = document.getElementById("add-table-button");
console.log(addButton);
if (addButton) {
    addButton.addEventListener("click", function () {
        if (tableCounter < maxTables) {
            tableCounter++;
            // const tableContainer = document.getElementById("table-container");
            var programForm = document.getElementById("programForm");
            if (programForm) {
                var table = document.createElement("table");
                programForm.appendChild(table);
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
        }
        else {
            alert("Maximum number of tables reached.");
        }
    });
}
function validateForm() {
    var inputFields = document.querySelectorAll("#programForm > select");
    console.log(inputFields);
    inputFields.forEach(function (input) {
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
var submitButton = document.getElementById("submit-button");
if (submitButton) {
    submitButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
        var programForm, programData, inputFields, dataObject_1, tableIndex, tableData, i, exerciseInput, exercise, image111, image, setsInput, sets, repsInput, reps, response, result, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    programForm = document.getElementById("programForm");
                    if (!programForm) return [3 /*break*/, 3];
                    programData = [];
                    inputFields = document.querySelectorAll("#programForm > select");
                    console.log(inputFields);
                    dataObject_1 = {};
                    inputFields.forEach(function (input, index) {
                        console.log(input.value);
                        console.log(input.id);
                        dataObject_1[input.id] = input.value;
                    });
                    console.log(dataObject_1);
                    for (tableIndex = 1; tableIndex <= tableCounter; tableIndex++) {
                        tableData = [];
                        //---KKKK Add----
                        // const tableInputsaaaa = document.querySelectorAll(
                        //   "#programForm > table td > input "
                        // );
                        // console.log(tableInputsaaaa);
                        for (i = 1; i <= 8; i++) {
                            console.log("for is here");
                            exerciseInput = document.querySelector("#programForm > table td > input[name^=exercise_" + i + "]");
                            exercise = exerciseInput.value;
                            image111 = document.querySelector("#programForm > table td > input[name^=image_" + i + "]");
                            image = image111.value;
                            setsInput = document.querySelector("#programForm > table td > input[name^=sets_" + i + "]");
                            sets = setsInput.value;
                            repsInput = document.querySelector("#programForm > table td > input[name^=reps_" + i + "]");
                            reps = repsInput.value;
                            tableData.push({ exercise: exercise, image: image, sets: sets, reps: reps });
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
                    return [4 /*yield*/, fetch("/program/add-program", {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ dataObject: dataObject_1, programData: programData })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    console.log(result);
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); });
}
// // ----program
// async function fetchExerciseData() {
//   try {
//     const response = await fetch("/api/getExerciseData");
//     const data = await response.json();
//     return data.exerciseData;
//   } catch (error) {
//     console.error("Error fetching exercise data:", error);
//     return [];
//   }
// }
function renderProgramInfo() {
    return __awaiter(this, void 0, void 0, function () {
        var programInfoContainer, programData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    programInfoContainer = document.querySelector(".renderProgramInfo");
                    if (!programInfoContainer) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetchProgramData()];
                case 1:
                    programData = _a.sent();
                    console.log(programData);
                    programData.forEach(function (program) {
                        var programDiv = document.createElement("div");
                        programDiv.textContent = "Program: " + program.name + ", Level: " + program.level;
                        programInfoContainer.appendChild(programDiv);
                    });
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
document.addEventListener("DOMContentLoaded", function () { return __awaiter(_this, void 0, void 0, function () {
    var selectedProgramString, selectedProgram_1, programInfoContainer, renderWorkoutTable;
    var _this = this;
    return __generator(this, function (_a) {
        selectedProgramString = localStorage.getItem("selectedProgram");
        if (selectedProgramString) {
            selectedProgram_1 = JSON.parse(selectedProgramString);
            programInfoContainer = document.querySelector(".renderProgramInfo");
            if (programInfoContainer) {
                programInfoContainer.innerHTML = "\n        <h2>Your Program:</h2>\n        <p>Name: " + selectedProgram_1.name + "</p>\n        <p>Level: " + selectedProgram_1.level + "</p>\n        <p>Days a Week: " + selectedProgram_1.days + "</p>\n        <p>Equipment: " + selectedProgram_1.equipment + "</p>\n        <p>Workout Time: " + selectedProgram_1.workoutTime + "</p>\n      ";
            }
            renderWorkoutTable = function () { return __awaiter(_this, void 0, void 0, function () {
                var response, data, workoutData, workoutTableContainer, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            return [4 /*yield*/, fetch("/api/getWorkoutData")];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2:
                            data = _a.sent();
                            workoutData = data.workoutData[selectedProgram_1._id];
                            workoutTableContainer = document.getElementById("renderWorkoutTable");
                            if (workoutTableContainer) {
                                workoutTableContainer.innerHTML = "\n            <h3>Your workout</h3>\n            <table>\n              <thead>\n                <tr>\n                  <th>Exercise</th>\n                  <th>Image</th>\n                  <th>Sets</th>\n                  <th>Reps</th>\n                </tr>\n              </thead>\n              <tbody>\n                " + workoutData
                                    .map(function (exercise) { return "\n                  <tr>\n                    <td>" + exercise.exercise + "</td>\n                    <td>" + exercise.image + "</td>\n                    <td>" + exercise.sets + "</td>\n                    <td>" + exercise.reps + "</td>\n                  </tr>\n                "; })
                                    .join("") + "\n              </tbody>\n            </table>\n          ";
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            error_3 = _a.sent();
                            console.error("Error fetching workout data:", error_3);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); };
            renderWorkoutTable();
        }
        else {
            //inform the user that the data is not exist
        }
        return [2 /*return*/];
    });
}); });
document.addEventListener("DOMContentLoaded", function () {
    renderProgramInfo();
});
