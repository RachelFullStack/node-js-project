"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    userName: {
        type: String,
        require: require,
        unique: true
    },
    userPassword: {
        type: String,
        require: require
    },
    role: {
        type: String,
        "default": "user",
        "enum": ["user", "admin"]
    }
});
var User = mongoose_1["default"].model("users", userSchema);
exports["default"] = User;
