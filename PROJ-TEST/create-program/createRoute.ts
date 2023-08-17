import express from "express";
import {
  getAllData,
  getCategories,
  deleteAllData,
  addCategory,
  addProgram,
  getProgramData,
} from "./createController";

const router = express.Router();

router
  .get("/get-all-data", getAllData)
  .get("/get-categories", getCategories)
  .delete("/delete-all-data", deleteAllData)
  .post("/add-category", addCategory)
  .post("/add-program", addProgram)
  .get("/get-program-data", getProgramData);

export default router;
