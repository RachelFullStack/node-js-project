"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var programSchema = new mongoose_1["default"].Schema({
    Exercise: String,
    image: String,
    sets: Number,
    reps: Number
});
var Program = mongoose_1["default"].model("program", programSchema);
exports["default"] = Program;
