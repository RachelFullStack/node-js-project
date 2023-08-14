"use strict";
exports.__esModule = true;
exports.AllData = exports.program = exports.Category = void 0;
var mongoose_1 = require("mongoose");
var categorySchema = new mongoose_1["default"].Schema({
    Days: Number,
    Equipment: String,
    Level: String,
    WorkoutTime: String
});
exports.Category = mongoose_1["default"].model("Category", categorySchema);
var ProgramSchema = new mongoose_1["default"].Schema({
    Exercise: String,
    image: String,
    sets: Number,
    reps: Number
});
exports.program = mongoose_1["default"].model("program", ProgramSchema);
var AllDataSchema = new mongoose_1["default"].Schema({
    category: {
        type: mongoose_1["default"].Schema.Types.ObjectId,
        ref: "Category"
    },
    program: [
        {
            type: mongoose_1["default"].Schema.Types.ObjectId,
            ref: "program"
        },
    ]
});
exports.AllData = mongoose_1["default"].model("AllData", AllDataSchema);
exports["default"] = exports.AllData;
