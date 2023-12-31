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
exports.getUser = exports.login = exports.register = void 0;
var usersModel_1 = require("./usersModel");
// Register
exports.register = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userName, userPassword, user, databaseUser, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, userName = _a.userName, userPassword = _a.userPassword;
                return [4 /*yield*/, usersModel_1["default"].findOne({ userName: userName })];
            case 1:
                user = _b.sent();
                if (user) {
                    console.log(user);
                    res.status(500).json({
                        ok: false,
                        error: "User already exists."
                    });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, usersModel_1["default"].create({
                        userName: userName,
                        userPassword: userPassword
                    })];
            case 2:
                databaseUser = _b.sent();
                res.status(200).json({
                    ok: true,
                    message: "User created successfully.",
                    databaseUser: databaseUser
                });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                res.status(500).json({
                    ok: false,
                    error: "Failed to create user."
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
// Login
exports.login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userName, userPassword, databaseUser, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, userName = _a.userName, userPassword = _a.userPassword;
                return [4 /*yield*/, usersModel_1["default"].findOne({ userName: userName, userPassword: userPassword })];
            case 1:
                databaseUser = _b.sent();
                if (!databaseUser) {
                    res.status(500).json({
                        ok: false,
                        error: "Failed to login. User not found."
                    });
                }
                else {
                    // const token = jwt.encode({ userId: databaseUser._id }, secret);
                    // res.cookie("user", token, {
                    //   maxAge: 50000000,
                    //   httpOnly: true,
                    // });
                    res.cookie("user", databaseUser._id, {
                        maxAge: 50000000,
                        httpOnly: true
                    });
                    res.status(200).json({
                        ok: true,
                        message: "User logged in successfully.",
                        userName: databaseUser.userName,
                        role: databaseUser.role
                    });
                }
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                console.log(error_2);
                res.status(500).send({ error: error_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Get User
exports.getUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, databaseUser, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = req.cookies.user;
                console.log(user);
                return [4 /*yield*/, usersModel_1["default"].findById(user)];
            case 1:
                databaseUser = _a.sent();
                if (!databaseUser)
                    throw new Error("problem with function getDatabaseUser");
                console.log(databaseUser);
                res.send({ databaseUser: databaseUser });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.log(error_3);
                res.status(500).send({ error: error_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
