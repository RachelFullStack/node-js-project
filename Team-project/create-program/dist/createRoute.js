"use strict";
exports.__esModule = true;
var express_1 = require("express");
var createController_1 = require("./createController");
var router = express_1["default"].Router();
router
    .get("/get- getAllData", createController_1.getAllData)
    .get("/get-categories", createController_1.getCategories)["delete"]("/delete-AllDate", createController_1.deleteAllData)
    .post("/add-program", createController_1.addProgram)
    .post("/add-category", createController_1.addCategory);
exports["default"] = router;
