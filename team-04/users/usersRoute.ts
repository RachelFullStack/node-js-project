import express from "express";

const userRouter = express.Router();

import { register, login, getUser } from "./usersController";

userRouter.post("/users/register", register);
userRouter.post("/users/login", login);
userRouter.get("/users/getUser", getUser);

export default userRouter;
