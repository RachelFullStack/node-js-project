"use strict";
exports.__esModule = true;
exports.Workout = void 0;
var mongoose_1 = require("mongoose");
var workoutSchema = new mongoose_1["default"].Schema({
    category: {
        type: mongoose_1["default"].Schema.Types.ObjectId,
        ref: "category"
    },
    program: [
        {
            type: mongoose_1["default"].Schema.Types.ObjectId,
            ref: "program"
        },
    ]
});
exports.Workout = mongoose_1["default"].model("AllData", workoutSchema);
exports["default"] = exports.Workout;
