"use strict";
exports.__esModule = true;
var express_1 = require("express");
var createController_1 = require("./createController");
var workoutRouter = express_1["default"].Router();
workoutRouter
    .post("/workout/addCategory", createController_1.addCategory)
    .get("/workout/getCategories", createController_1.getCategories)
    .get("/workout/getWorkouts", createController_1.getWorkouts)
    .post("/workout/addWorkout", createController_1.addWorkOut)
    .get("/workout/getWorkout/:id", createController_1.getSingleWorkout);
// .patch("/workout/editProgramName", editProgramName)
// .delete("/workout/deleteDataCard", deleteDataCard);
exports["default"] = workoutRouter;
