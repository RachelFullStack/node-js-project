"use strict";
exports.__esModule = true;
var express_1 = require("express");
///// USER /////
var router = express_1["default"].Router();
var controller_1 = require("./controller");
router.post("/users/register-user", controller_1.userRegistration);
router.post("/users/login-user", controller_1.userLogin);
router.get("/users/get-user", controller_1.getDatabaseUser);
///// CREATE /////
var controller_2 = require("./controller");
var createRouter = express_1["default"].Router();
createRouter
    .get("/get-all-Infos", controller_2.getInfos)
    .get("/get-Infos", controller_2.addInfo)
    .get("/get-AllData-data", controller_2.getAllDataData)["delete"]("/delete-all-data", controller_2.deleteAllData)
    .post("/add-Info", controller_2.addInfo)
    .post("/add-table", controller_2.addTable)
    .get("/add-table", controller_2.addAllData);
exports["default"] = router;
