"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express_1 = require("express");
var uuidv4_1 = require("uuidv4");
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv");
var mongoose_2 = require("mongoose");
dotenv.config();
var uri = process.env.MONGOOSE_URI + "datatest";
if (uri) {
    mongoose_1["default"]
        .connect(uri)
        .then(function () { return console.log("we are have mongoosee"); })["catch"](function (err) { return console.log("no mongoose", err); });
}
else {
    console.log("no uri");
}
var app = express_1["default"]();
app.use(express_1["default"].json());
var UserSchema = new mongoose_2.Schema({ name: String, src: String });
var UserModel = mongoose_1["default"].model("users", UserSchema);
app.use(express_1["default"].static(__dirname + "/public"));
var User = /** @class */ (function () {
    function User(name, src) {
        this.name = name;
        this.src = src;
        this.uid = uuidv4_1.uuid();
    }
    User.prototype.getSimpelUser = function () {
        return { name: this.name, src: this.src, uid: this.uid };
    };
    return User;
}());
app.use(express_1["default"].static("./public"));
app.get("/api/user-get", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, UserModel.find({})];
            case 1:
                users = _a.sent();
                res.send({ users: users });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.post("/api/add-user", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, src, usersdb, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name = _a.name, src = _a.src;
                return [4 /*yield*/, UserModel.create({ name: name, src: src })];
            case 1:
                usersdb = _b.sent();
                res.status(200).send({ ok: true });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                console.log(error_2);
                res.status(500);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.patch("/api/update-user", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, uid, userdb, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name = _a.name, uid = _a.uid;
                if (!name)
                    throw new Error("no name in date");
                if (!uid)
                    throw new Error("no uid in date");
                return [4 /*yield*/, UserModel.findByIdAndUpdate(uid, { name: name })];
            case 1:
                userdb = _b.sent();
                res.status(200).send({ ok: true });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _b.sent();
                console.log(error_3);
                res.status(500);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app["delete"]("/api/Delete-user", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var uid, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                uid = req.body.uid;
                if (!uid)
                    throw new Error("no uid for user ");
                return [4 /*yield*/, UserModel.findByIdAndDelete(uid)];
            case 1:
                _a.sent();
                res.send({ message: "User deleted" });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.log(error_4);
                res.status(500);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.listen(3000, function () {
    console.log("server listen 3000");
});