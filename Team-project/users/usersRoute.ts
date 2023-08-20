import express from "express";

const router = express.Router();

import {
  userRegistration,
  userLogin,
  getDatabaseUser,
} from "./usersController";

router.post("/users/register-user", userRegistration);
router.post("/users/login-user", userLogin);
router.get("/users/get-user", getDatabaseUser);

export default router;
