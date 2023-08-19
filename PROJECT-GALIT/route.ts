import express from "express";

///// USER /////

const router = express.Router();

import { userRegistration, userLogin, getDatabaseUser } from "./controller";

router.post("/users/register-user", userRegistration);
router.post("/users/login-user", userLogin);
router.get("/users/get-user", getDatabaseUser);

///// CREATE /////

import {
  getInfos,
  addInfo,
  deleteAllData,
  getAllDataData,
  addTable,
  addAllData,
} from "./controller";

const createRouter = express.Router();

createRouter
  .get("/get-all-Infos", getInfos)
  .get("/get-Infos", addInfo)
  .get("/get-AllData-data", getAllDataData)
  .delete("/delete-all-data", deleteAllData)
  .post("/add-Info", addInfo)
  .post("/add-table", addTable)
  .get("/add-table", addAllData);

export default router;
