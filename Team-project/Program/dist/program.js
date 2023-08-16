"use strict";
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
exports.__esModule = true;
var api_1 = require("../dist/api");
///// TIMER /////
var timerInterval;
var startTime = 0;
var elapsedTime = 0;
var accumulatedPauseTime = 0;
var isPaused = true;
var timerDisplay = document.getElementById("timerDisplay");
var startButton = document.getElementById("startButton");
var pauseButton = document.getElementById("pauseButton");
var resetButton = document.getElementById("resetButton");
function updateDisplay() {
    var currentTime = isPaused
        ? accumulatedPauseTime
        : Date.now() - startTime + elapsedTime;
    var totalSeconds = Math.floor(currentTime / 1000);
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;
    timerDisplay.textContent = minutes.toString().padStart(2, "0") + ":" + seconds
        .toString()
        .padStart(2, "0");
}
function startTimer() {
    console.log("Start Button Clicked");
    console.log("isPaused:", isPaused);
    if (isPaused) {
        isPaused = false;
        if (elapsedTime === 0 && accumulatedPauseTime === 0) {
            startTime = Date.now();
        }
        else {
            startTime = Date.now() - accumulatedPauseTime;
        }
        console.log("startTime:", startTime);
        updateDisplay();
        timerInterval = setInterval(updateDisplay, 1000);
    }
}
function pauseTimer() {
    console.log("Pause Button Clicked");
    console.log("isPaused:", isPaused);
    if (!isPaused) {
        isPaused = true;
        accumulatedPauseTime = Date.now() - startTime + elapsedTime;
        console.log("accumulatedPauseTime:", accumulatedPauseTime);
        clearInterval(timerInterval);
    }
}
function resetTimer() {
    console.log("Reset Button Clicked");
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    isPaused = true;
    elapsedTime = 0;
    accumulatedPauseTime = 0;
    updateDisplay();
}
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
///// WORKOUT TABLE /////
function fetchWorkoutData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, workoutDataContainer_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/api/get-workout-data")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    workoutDataContainer_1 = document.getElementById("workoutDataContainer");
                    workoutDataContainer_1.innerHTML = "";
                    data.allData.forEach(function (tableData, tableIndex) {
                        var table = document.createElement("table");
                        var tableHead = document.createElement("thead");
                        var tableBody = document.createElement("tbody");
                        var headerRow = document.createElement("tr");
                        var headers = ["Exercise", "Image", "Sets", "Reps"];
                        for (var _i = 0, headers_1 = headers; _i < headers_1.length; _i++) {
                            var headerText = headers_1[_i];
                            var headerCell = document.createElement("th");
                            headerCell.textContent = headerText;
                            headerRow.appendChild(headerCell);
                        }
                        tableHead.appendChild(headerRow);
                        tableData.forEach(function (exercise) {
                            var row = document.createElement("tr");
                            var exerciseText = exercise.exercise, image = exercise.image, sets = exercise.sets, reps = exercise.reps;
                            var exerciseCell = document.createElement("td");
                            exerciseCell.textContent = exerciseText;
                            row.appendChild(exerciseCell);
                            var imageCell = document.createElement("td");
                            var imageElement = document.createElement("img");
                            imageElement.src = image;
                            imageElement.alt = exerciseText;
                            imageCell.appendChild(imageElement);
                            row.appendChild(imageCell);
                            var setsCell = document.createElement("td");
                            setsCell.textContent = sets;
                            row.appendChild(setsCell);
                            var repsCell = document.createElement("td");
                            repsCell.textContent = reps;
                            row.appendChild(repsCell);
                            tableBody.appendChild(row);
                        });
                        table.appendChild(tableHead);
                        table.appendChild(tableBody);
                        workoutDataContainer_1.appendChild(table);
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
///// COMPLETE BUTTON /////
var completeButton = document.getElementById("completeButton");
if (completeButton) {
    var isCompleted_1 = false;
    completeButton.addEventListener("click", function () { return __awaiter(void 0, void 0, void 0, function () {
        var workoutData, response, result, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!isCompleted_1) return [3 /*break*/, 5];
                    completeButton.textContent = "Workout Completed!";
                    completeButton.classList.add("completed");
                    isCompleted_1 = true;
                    workoutData = window.workoutData || [];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("/api/add-workout-data", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ workoutData: workoutData })
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    result = _a.sent();
                    console.log(result);
                    return [3 /*break*/, 5];
                case 4:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); });
}
function fetchExerciseData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/api/getExerciseData")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data.exerciseData];
                case 3:
                    error_3 = _a.sent();
                    console.error("Error fetching exercise data:", error_3);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderProgramInfo() {
    return __awaiter(this, void 0, void 0, function () {
        var programInfoContainer, programData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    programInfoContainer = document.querySelector(".renderProgramInfo");
                    if (!programInfoContainer) return [3 /*break*/, 2];
                    return [4 /*yield*/, api_1.fetchProgramData()];
                case 1:
                    programData = _a.sent();
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
document.addEventListener("DOMContentLoaded", function () { return __awaiter(void 0, void 0, void 0, function () {
    var selectedProgramString, selectedProgram_1, programInfoContainer, renderWorkoutTable;
    return __generator(this, function (_a) {
        selectedProgramString = localStorage.getItem("selectedProgram");
        if (selectedProgramString) {
            selectedProgram_1 = JSON.parse(selectedProgramString);
            programInfoContainer = document.querySelector(".renderProgramInfo");
            if (programInfoContainer) {
                programInfoContainer.innerHTML = "\n        <h2>Your Program:</h2>\n        <p>Name: " + selectedProgram_1.name + "</p>\n        <p>Level: " + selectedProgram_1.level + "</p>\n        <p>Days a Week: " + selectedProgram_1.days + "</p>\n        <p>Equipment: " + selectedProgram_1.equipment + "</p>\n        <p>Workout Time: " + selectedProgram_1.workoutTime + "</p>\n      ";
            }
            renderWorkoutTable = function () { return __awaiter(void 0, void 0, void 0, function () {
                var response, data, workoutData, workoutTableContainer, error_4;
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
                            error_4 = _a.sent();
                            console.error("Error fetching workout data:", error_4);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); };
            renderWorkoutTable();
        }
        return [2 /*return*/];
    });
}); });
document.addEventListener("DOMContentLoaded", function () {
    renderProgramInfo();
});
