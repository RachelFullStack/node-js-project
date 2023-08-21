"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
// This is a category schema of the program
var categorySchema = new mongoose_1["default"].Schema({
    Title: String,
    Days: Number,
    Equipment: String,
    Level: String,
    WorkoutTime: String
});
var Category = mongoose_1["default"].model("category", categorySchema);
exports["default"] = Category;
