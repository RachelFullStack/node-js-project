"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userRouter = express_1["default"].Router();
var usersController_1 = require("./usersController");
userRouter.post("/users/register", usersController_1.register);
userRouter.post("/users/login", usersController_1.login);
userRouter.get("/users/getUser", usersController_1.getUser);
exports["default"] = userRouter;
