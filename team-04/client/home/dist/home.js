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
var workouts = [];
var filteredWorkouts = [];
// images to choose from randomly
var images = [
    "dumbell.jpeg",
    "dumbell2.avif",
    "dumbell-3.avif",
    "dumbell-4.webp",
    "dumbell-5.jpeg",
];
// DOM elements
var workoutCardContainer = document.querySelector(".card-container");
var filterBtn = document.getElementById("apply-filter-button");
var levels = document.getElementById("filter-level");
var days = document.getElementById("filter-days");
var equipment = document.getElementById("filter-equipment");
var time = document.getElementById("filter-time");
var userNameE = document.getElementById("userName");
//  function to get user role and name
var getUserName = function () { return __awaiter(_this, void 0, void 0, function () {
    var params, userName, role, us, rl, adminE;
    return __generator(this, function (_a) {
        params = new URLSearchParams(window.location.search);
        userName = params.get("userName");
        role = params.get("role");
        if (userName != null)
            localStorage.setItem("username", userName);
        if (role != null)
            localStorage.setItem("role", role);
        us = localStorage.getItem("username");
        rl = localStorage.getItem("role");
        if (!us) {
        }
        else
            userNameE.innerHTML = us;
        if (rl === "admin") {
            adminE = document.getElementById("admin");
            if (adminE)
                adminE.style.display = "block";
        }
        return [2 /*return*/];
    });
}); };
getUserName();
// Getting all workouts
var getWorkouts = function () { return __awaiter(_this, void 0, void 0, function () {
    var response, data, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch("/fitnessApi/workout/getWorkouts")];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                console.log(data);
                workouts = data.workouts;
                filteredWorkouts = workouts;
                console.log(workouts);
                showInUI();
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                console.log(err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
// function to show workouts in UI
var showInUI = function () {
    workoutCardContainer.innerHTML = "";
    if (filteredWorkouts.length === 0) {
        workoutCardContainer.innerHTML = "<h2>No workouts found</h2>";
        return;
    }
    filteredWorkouts.forEach(function (workout) {
        console.log(workout);
        var imgIndex = Math.floor(Math.random() * 5);
        console.log(imgIndex);
        var html = "\n        <a class=\"card\" href = \"/userPrograms/userProgram.html?id=" + workout._id + "\">\n        <div class=\"card-header\">\n            <img src=\"/images/" + images[imgIndex] + "\" alt = \"Workout Image\" />\n        </div>\n        <div class=\"card-body\">\n            <h3>" + workout.category.Title + "</h3>\n            <ul>\n                <li>\n                  <p><i class=\"fas fa-signal\"\n                      style=\"color: blue;\"\n                    ></i>Level:</p>\n                   <span class=\"level\">" + workout.category.Level + "</span>\n                  </li>\n                  \n                <li>\n                  <p>\n                    <i class=\"fas fa-calendar-alt\" style=\"color: green;\"></i> Days:\n                  </p>\n                  <span class=\"days\">" + workout.category.Days + " Days a week</span>\n                </li>\n\n                <li>\n                  <p>\n                    <i class=\"fas fa-dumbbell\"\n                      style=\"color: red;\"\n                    ></i>Equipment:\n                  </p> \n                  <span class=\"equipment\"\n                    \n                  >" + workout.category.Equipment + "</span></li>\n                <li>\n                  <p>\n                    <i class=\"fas fa-clock\"\n                      style=\"color: orange;\"\n                    ></i>Time:\n                  </p>\n                   <span class=\"time\"> " + workout.category.WorkoutTime + "</span>\n                </li>\n            </ul>\n        </div>\n    </a>\n    ";
        workoutCardContainer.insertAdjacentHTML("beforeend", html);
    });
};
getWorkouts();
// function to filter data
var filterData = function (e) {
    console.log("ok,");
    e.preventDefault();
    console.log("filtering data");
    var level = levels.value;
    var day = days.value;
    var equip = equipment.value;
    var ti = time.value;
    filteredWorkouts = workouts
        .filter(function (workout) {
        if (level !== "all") {
            return workout.category.Level === level;
        }
        else {
            return workout;
        }
    })
        .filter(function (workout) {
        if (day !== "all") {
            return workout.category.Days === day;
        }
        else {
            return workout;
        }
    })
        .filter(function (workout) {
        if (equip !== "all") {
            return workout.category.Equipment === equip;
        }
        else {
            return workout;
        }
    })
        .filter(function (workout) {
        if (ti !== "all") {
            return workout.category.WorkoutTime === ti;
        }
        else {
            return workout;
        }
    });
    showInUI();
};
filterBtn.addEventListener("click", filterData);
