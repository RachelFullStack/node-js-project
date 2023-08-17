"use strict";
exports.__esModule = true;
var express_1 = require("express");
var createController_1 = require("./createController");
var router = express_1["default"].Router();
router
    .get("/get-all-data", createController_1.getAllData)
    .get("/get-categories", createController_1.getCategories)["delete"]("/delete-all-data", createController_1.deleteAllData)
    .post("/add-category", createController_1.addCategory)
    .post("/add-program", createController_1.addProgram)
    .get("/get-program-data", createController_1.getProgramData);
exports["default"] = router;
