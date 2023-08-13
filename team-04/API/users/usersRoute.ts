import express from "express";

const router = express.Router();

import { userRegistration } from "./usersController";

router.post("/users/register-user", userRegistration);

export default router;
