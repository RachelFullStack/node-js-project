import express from "express";

const userRouter = express.Router();

import { register, login, getUser } from "./usersController";

// User Routes
userRouter.post("/users/register", register);
userRouter.post("/users/login", login);
userRouter.get("/users/getUser", getUser);
// router.post("/users/get-database-user", getDatabaseUser);

export default userRouter;
