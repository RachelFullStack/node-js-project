"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
/*
This is a program schema of the program
*/
var ProgramSchema = new mongoose_1["default"].Schema({
    Exercise: String,
    image: String,
    sets: Number,
    reps: Number
});
var Program = mongoose_1["default"].model("program", ProgramSchema);
exports["default"] = Program;
