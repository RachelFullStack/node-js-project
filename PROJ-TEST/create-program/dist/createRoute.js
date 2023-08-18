"use strict";
exports.__esModule = true;
var express_1 = require("express");
var createController_1 = require("./createController");
var createRouter = express_1["default"].Router();
createRouter
    .get("/get-all-data", createController_1.getAllData)
    .get("/get-categories", createController_1.getCategories)
    .get("/get-program-data", createController_1.getProgramData)["delete"]("/delete-all-data", createController_1.deleteAllData)
    .post("/add-program", createController_1.addProgram)
    .post("/add-category", createController_1.addCategory);
exports["default"] = createRouter;
