"use strict";
exports.__esModule = true;
exports.AllData = exports.Table = exports.Info = void 0;
var mongoose_1 = require("mongoose");
///// USER /////
var userSchema = new mongoose_1.Schema({
    userName: { type: String, require: require },
    userPassword: { type: String, require: require },
    phone: String,
    address: String,
    email: String,
    roll: String
});
var User = mongoose_1["default"].model("users", userSchema);
exports["default"] = User;
///// PROGRAM INFO /////
var InfoSchema = new mongoose_1["default"].Schema({
    Days: Number,
    Equipment: String,
    Level: String,
    WorkoutTime: String
});
exports.Info = mongoose_1["default"].model("Info", InfoSchema);
///// PROGRAM TABLE /////
var TableSchema = new mongoose_1["default"].Schema({
    Exercise: String,
    image: String,
    sets: Number,
    reps: Number
});
exports.Table = mongoose_1["default"].model("Table", TableSchema);
///// ALL PROGRAM DATA/////
var AllDataSchema = new mongoose_1["default"].Schema({
    Info: {
        type: mongoose_1["default"].Schema.Types.ObjectId,
        ref: "Info"
    },
    Table: [
        {
            type: mongoose_1["default"].Schema.Types.ObjectId,
            ref: "Table"
        },
    ]
});
exports.AllData = mongoose_1["default"].model("AllData", AllDataSchema);
