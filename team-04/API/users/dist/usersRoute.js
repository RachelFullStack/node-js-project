"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var usersController_1 = require("./usersController");
router.post("/users/register-user", usersController_1.userRegistration);
exports["default"] = router;
