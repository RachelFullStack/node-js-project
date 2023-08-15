"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
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
