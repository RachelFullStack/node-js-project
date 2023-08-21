"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv");
var usersRoute_1 = require("./users/usersRoute");
var createRoute_1 = require("./create/createRoute");
var cookie_parser_1 = require("cookie-parser");
// import cors from "cors";
// import jwt from "jwt-simple";
// const secret: string = process.env.JWT_SECRET as string;
dotenv.config();
var app = express_1["default"]();
app.use(express_1["default"].json());
app.use(cookie_parser_1["default"]());
app.use(express_1["default"].static("./client"));
app.use("/fitnessApi/", usersRoute_1["default"]);
app.use("/fitnessApi/", createRoute_1["default"]);
var uri = process.env.MONGOOSE_URI + "-Training";
// mongodb+srv://GalitL:3314402002Ga@cluster0.mrjladc.mongodb.net/project
if (uri) {
    mongoose_1["default"]
        .connect(uri)
        .then(function () { return console.log("DB connection successful!"); })["catch"](function (err) { return console.log("BD error:", err); });
}
else {
    console.log("No URI");
}
var myPort = 3000;
app.listen(3000, function () {
    console.log("server listen in http://localhost:" + myPort);
});
