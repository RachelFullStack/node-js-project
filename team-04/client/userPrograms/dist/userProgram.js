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
// Variables
var uiElement = document.querySelector(".renderProgramInfo");
var workoutTableContainer = document.getElementById("renderWorkoutTable");
var doneBtn = document.getElementById("completeButton");
var workout = {};
// get all workout from api
var getProgram = function () { return __awaiter(_this, void 0, void 0, function () {
    var urlParams, id, response, data, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                urlParams = new URLSearchParams(window.location.search);
                id = urlParams.get("id");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch("/fitnessApi/workout/getWorkout/" + id)];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 3:
                data = _a.sent();
                if (data.ok && data.workout) {
                    workout = data.workout;
                }
                showInPage();
                renderWorkoutTable();
                return [3 /*break*/, 5];
            case 4:
                err_1 = _a.sent();
                console.log(err_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
getProgram();
// To show program category in UI
var showInPage = function () {
    var html = "\n    <a class=\"card\" href = \"/userPrograms/userProgram.html?id=" + workout._id + "\">\n    <div class=\"card-header\">\n        <h2>Category Details</h2>\n        <img src=\"/images/dumbell.jpeg\" alt=\"Workout Image 1\">\n    </div>\n    <div class=\"card-body\">\n        <h3>" + workout.category.Title + "</h3>\n        <ul>\n            <li>\n              <p><i class=\"fas fa-signal\"\n                  style=\"color: blue;\"\n                ></i>Level:</p>\n               <span class=\"level\">" + workout.category.Level + "</span>\n              </li>\n              \n            <li>\n              <p>\n                <i class=\"fas fa-calendar-alt\" style=\"color: green;\"></i> Days:\n              </p>\n              <span class=\"days\">" + workout.category.Days + " Days a week</span>\n            </li>\n\n            <li>\n              <p>\n                <i class=\"fas fa-dumbbell\"\n                  style=\"color: red;\"\n                ></i>Equipment:\n              </p> \n              <span class=\"equipment\"\n                \n              >" + workout.category.Equipment + "</span></li>\n            <li>\n              <p>\n                <i class=\"fas fa-clock\"\n                  style=\"color: orange;\"\n                ></i>Time:\n              </p>\n               <span class=\"time\"> " + workout.category.WorkoutTime + "</span>\n            </li>\n        </ul>\n    </div>\n</a>\n";
    if (!uiElement)
        return;
    uiElement.insertAdjacentHTML("beforeend", html);
};
// Render Workout table with exercies on UI
var renderWorkoutTable = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log(workout);
        try {
            if (workoutTableContainer) {
                workoutTableContainer.innerHTML = "\n              " + workout.program
                    .map(function (exercise) { return "\n                <tr>\n                  <td>" + exercise.Exercise + "</td>\n                  <td><img src=\"" + exercise.image + "\" alt=\"Exercise Image\" /></td>\n                  <td>" + exercise.sets + "</td>\n                  <td>" + exercise.reps + "</td>\n                </tr>\n              "; })
                    .join("") + "\n            </tbody>\n          </table>\n        ";
            }
        }
        catch (error) {
            console.error("Error fetching workout data:", error);
        }
        return [2 /*return*/];
    });
}); };
// ----------
if (doneBtn) {
    var isCompleted_1 = false;
    doneBtn.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!isCompleted_1) {
                doneBtn.textContent = "Workout Completed!";
                doneBtn.classList.add("completed");
                isCompleted_1 = true;
            }
            return [2 /*return*/];
        });
    }); });
}
// -------
// doneBtn.addEventListener("click", async () => {
//   //move to home page
//   window.location.href = "../home/home.html";
// });
