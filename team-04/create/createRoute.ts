import express from "express";
import {
  getCategories,
  addWorkOut,
  addCategory,
  getSingleWorkout,
  getWorkouts,
  // editProgramName,
  // deleteDataCard,
} from "./createController";

const workoutRouter = express.Router();

workoutRouter
  .post("/workout/addCategory", addCategory)
  .get("/workout/getCategories", getCategories)
  .get("/workout/getWorkouts", getWorkouts)
  .post("/workout/addWorkout", addWorkOut)
  .get("/workout/getWorkout/:id", getSingleWorkout);
// .patch("/workout/editProgramName", editProgramName)
// .delete("/workout/deleteDataCard", deleteDataCard);
export default workoutRouter;
