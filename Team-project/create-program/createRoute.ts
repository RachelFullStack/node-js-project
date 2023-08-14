import express from "express";
import {
  getAllData,
  getCategories,
  deleteAllData,
  addProgram,
  addCategory,
} from "./createController";

const router = express.Router();

router
  .get("/get- getAllData", getAllData)
  .get("/get-categories", getCategories)
  .delete("/delete-AllDate", deleteAllData)
  .post("/add-program", addProgram)
  .post("/add-category", addCategory);
export default router;
