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
exports.getProgramData = exports.addProgram = exports.addCategory = exports.deleteAllData = exports.getCategories = exports.getAllData = void 0;
var createModel_1 = require("./createModel");
var createModel_2 = require("./createModel");
var createModel_3 = require("./createModel");
exports.getAllData = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allData, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, createModel_1["default"].find({})
                        .populate("category")
                        .populate("program")
                        .exec()];
            case 1:
                allData = _a.sent();
                res.send({ allData: allData });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                res.status(500).send("error");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getCategories = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var category, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, createModel_2.Category.find({})];
            case 1:
                category = _a.sent();
                res.send({ category: category });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.log(error_2);
                res.status(500).send("error");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteAllData = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, AllDataIndex, AllData, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                _id = req.body;
                console.log(_id);
                if (!_id)
                    throw new Error("uis not found");
                return [4 /*yield*/, createModel_1["default"].findByIdAndDelete(_id)];
            case 1:
                AllDataIndex = _a.sent();
                return [4 /*yield*/, createModel_1["default"].find({})
                        .populate("category")
                        .populate("program")
                        .exec()];
            case 2:
                AllData = _a.sent();
                res.send({ AllData: AllData });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                console.log(error_3);
                res.status(500).send("didn't get AllData to delete");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.addCategory = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, Days, Equipment, level, WorkoutTime, newCategory, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, Days = _a.Days, Equipment = _a.Equipment, level = _a.level, WorkoutTime = _a.WorkoutTime;
                return [4 /*yield*/, createModel_2.Category.create({
                        Days: Days,
                        Equipment: Equipment,
                        level: level,
                        WorkoutTime: WorkoutTime
                    })];
            case 1:
                newCategory = _b.sent();
                res.status(200).send({ ok: true });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _b.sent();
                console.log(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addProgram = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var programData, newPrograms, newAllData, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                programData = req.body;
                return [4 /*yield*/, Promise.all(programData.map(function (tableData) { return __awaiter(void 0, void 0, void 0, function () {
                        var exercises;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, Promise.all(tableData.map(function (exercise) { return __awaiter(void 0, void 0, void 0, function () {
                                        var newExercise;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, createModel_3.program.create(exercise)];
                                                case 1:
                                                    newExercise = _a.sent();
                                                    return [2 /*return*/, newExercise._id];
                                            }
                                        });
                                    }); }))];
                                case 1:
                                    exercises = _a.sent();
                                    return [2 /*return*/, exercises];
                            }
                        });
                    }); }))];
            case 1:
                newPrograms = _a.sent();
                return [4 /*yield*/, createModel_1["default"].create({
                        category: req.body.categoryId,
                        program: newPrograms.flat()
                    })];
            case 2:
                newAllData = _a.sent();
                console.log(newAllData);
                res.status(200).send({ ok: true });
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                console.log(error_5);
                res.status(500).send("didn't get data");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getProgramData = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allProgramData, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, createModel_1["default"].find({})
                        .populate("category")
                        .populate("program")
                        .exec()];
            case 1:
                allProgramData = _a.sent();
                res.send({ allProgramData: allProgramData });
                return [3 /*break*/, 3];
            case 2:
                error_6 = _a.sent();
                console.log(error_6);
                res.status(500).send("error");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
