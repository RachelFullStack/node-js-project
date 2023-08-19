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
exports.getAllDataData = exports.addAllData = exports.addTable = exports.addInfo = exports.deleteAllData = exports.getInfos = exports.getDatabaseUser = exports.userLogin = exports.userRegistration = void 0;
var model_1 = require("./model");
var model_2 = require("./model");
///// USER /////
// ----------------------------------------------------------------------
exports.userRegistration = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userName, userPassword, databaseUser, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, userName = _a.userName, userPassword = _a.userPassword;
                console.log("userName: " + userName + ", userPassword: " + userPassword);
                return [4 /*yield*/, model_1["default"].create({
                        userName: userName,
                        userPassword: userPassword
                    })];
            case 1:
                databaseUser = _b.sent();
                console.log("databaseUser: " + databaseUser);
                res.status(200).send({ ok: true });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                console.log(error_1);
                res.status(500).send("error in register");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// ----------------------------------------------------------------------
exports.userLogin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userName, userPassword, databaseUser, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, userName = _a.userName, userPassword = _a.userPassword;
                console.log(userName, userPassword);
                return [4 /*yield*/, model_1["default"].findOne({ userName: userName, userPassword: userPassword })];
            case 1:
                databaseUser = _b.sent();
                if (!databaseUser)
                    throw new Error("the date didn't arrive");
                console.log(databaseUser);
                res.cookie("user", databaseUser._id, {
                    maxAge: 50000000,
                    httpOnly: true
                });
                res.status(200).send({ ok: true });
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
// ----------------------------------------------------------------------
exports.getDatabaseUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, databaseUser, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = req.cookies.user;
                console.log(user);
                return [4 /*yield*/, model_1["default"].findById(user)];
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
///// CREATE /////
exports.getInfos = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var Infos, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, model_2.Info.find({})];
            case 1:
                Infos = _a.sent();
                res.send({ Infos: Infos });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.log(error_4);
                res.status(500).send("error");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteAllData = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, AllDataIndex, allData, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                _id = req.body._id;
                console.log(_id);
                if (!_id)
                    throw new Error("ID not found");
                return [4 /*yield*/, model_2.AllData.findByIdAndDelete(_id)];
            case 1:
                AllDataIndex = _a.sent();
                return [4 /*yield*/, model_2.AllData.find({})
                        .populate("Info")
                        .populate("Table")
                        .exec()];
            case 2:
                allData = _a.sent();
                res.send({ allData: allData });
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                console.log(error_5);
                res.status(500).send("Failed to delete AllData");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.addInfo = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, Days, Equipment, Level, WorkoutTime, newInfo, error_6;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, Days = _a.Days, Equipment = _a.Equipment, Level = _a.Level, WorkoutTime = _a.WorkoutTime;
                return [4 /*yield*/, model_2.Info.create({
                        Days: Days,
                        Equipment: Equipment,
                        Level: Level,
                        WorkoutTime: WorkoutTime
                    })];
            case 1:
                newInfo = _b.sent();
                console.log(newInfo);
                res.status(200).send({ ok: true });
                return [3 /*break*/, 3];
            case 2:
                error_6 = _b.sent();
                console.log(error_6);
                res.status(500).send("Failed to add Info");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addTable = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, Exercise, Image, Sets, Reps, newTable, error_7;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, Exercise = _a.Exercise, Image = _a.Image, Sets = _a.Sets, Reps = _a.Reps;
                return [4 /*yield*/, model_2.Table.create({
                        Exercise: Exercise,
                        Image: Image,
                        Sets: Sets,
                        Reps: Reps
                    })];
            case 1:
                newTable = _b.sent();
                console.log(newTable);
                res.status(200).send({ ok: true });
                return [3 /*break*/, 3];
            case 2:
                error_7 = _b.sent();
                console.log(error_7);
                res.status(500).send("Failed to add Table");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addAllData = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, dataObject, AllDataData, newAllDatas, newAllData, error_8;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, dataObject = _a.dataObject, AllDataData = _a.AllDataData;
                console.log(dataObject);
                console.log(AllDataData);
                return [4 /*yield*/, Promise.all(AllDataData.map(function (tableData) { return __awaiter(void 0, void 0, void 0, function () {
                        var Tables;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, Promise.all(tableData.map(function (Table) { return __awaiter(void 0, void 0, void 0, function () {
                                        var newTable;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, Table.create(Table)];
                                                case 1:
                                                    newTable = _a.sent();
                                                    return [2 /*return*/, newTable._id];
                                            }
                                        });
                                    }); }))];
                                case 1:
                                    Tables = _a.sent();
                                    return [2 /*return*/, Tables];
                            }
                        });
                    }); }))];
            case 1:
                newAllDatas = _b.sent();
                return [4 /*yield*/, model_2.AllData.create({
                        Info: req.body.categoryId,
                        Table: newAllDatas.flat()
                    })];
            case 2:
                newAllData = _b.sent();
                res.status(200).send({ ok: true });
                return [3 /*break*/, 4];
            case 3:
                error_8 = _b.sent();
                console.log(error_8);
                res.status(500).send("Failed to add AllData");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getAllDataData = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allData, error_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, model_2.AllData.find({})
                        .populate("Info")
                        .populate("Table")
                        .exec()];
            case 1:
                allData = _a.sent();
                res.send({ allData: allData });
                return [3 /*break*/, 3];
            case 2:
                error_9 = _a.sent();
                console.log(error_9);
                res.status(500).send("error");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
