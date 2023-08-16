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
// ----------------------------xxxxxx--------------------------------------//
// ----------------------------create---------------------------------------//
// ----------------------------xxxxxx--------------------------------------//
var maxTables = 5;
var tableCounter = 0;
var addButton = document.getElementById("add-table-button");
if (addButton) {
    addButton.addEventListener("click", function () {
        if (tableCounter < maxTables) {
            tableCounter++;
            var tableContainer = document.getElementById("table-container");
            if (tableContainer) {
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
        }
        else {
            alert("Maximum number of tables reached.");
        }
    });
}
function validateForm() {
    var inputField = document.getElementById("someInputField");
    if (!inputField.value) {
        alert("Please fill out the required field.");
        return false;
    }
    return true;
}
var submitButton = document.getElementById("submit-button");
if (submitButton) {
    submitButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
        var programForm, isValid, programData, tableIndex, tableData, i, exercise, image, sets, reps, response, result, error_2;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    programForm = document.getElementById("program-form");
                    if (!programForm) return [3 /*break*/, 6];
                    isValid = validateForm();
                    if (!isValid) return [3 /*break*/, 6];
                    programData = [];
                    for (tableIndex = 1; tableIndex <= tableCounter; tableIndex++) {
                        tableData = [];
                        for (i = 1; i <= 8; i++) {
                            exercise = (_a = programForm.elements["exercise_" + i + "_" + tableIndex]) === null || _a === void 0 ? void 0 : _a.value;
                            image = (_b = programForm.elements["image_" + i + "_" + tableIndex]) === null || _b === void 0 ? void 0 : _b.files[0];
                            sets = (_c = programForm.elements["sets_" + i + "_" + tableIndex]) === null || _c === void 0 ? void 0 : _c.value;
                            reps = (_d = programForm.elements["reps_" + i + "_" + tableIndex]) === null || _d === void 0 ? void 0 : _d.value;
                            tableData.push({ exercise: exercise, image: image, sets: sets, reps: reps });
                        }
                        programData.push(tableData);
                    }
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("/api/add-program", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(programData)
                        })];
                case 2:
                    response = _e.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    result = _e.sent();
                    console.log(result);
                    return [3 /*break*/, 5];
                case 4:
                    error_2 = _e.sent();
                    console.error(error_2);
                    return [3 /*break*/, 5];
                case 5:
                    window.location.href = "./program.html";
                    _e.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    }); });
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
