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
exports.getSelectedPriceCa = exports.updateBook = exports.getSelectedPrices = exports.getSelectedPriceDown = exports.getSelectedPriceUp = exports.addClient = exports.addCategory = exports.addBook = exports.deleteAllData = exports.getSelectedCategory = exports.getCategories = exports.getAllData = void 0;
var createModel_1 = require("./createModel");
exports.getAllData = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var AllData_1, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, AllData_1.find({})
                        .populate("category")
                        .populate("program")
                        .exec()];
            case 1:
                AllData_1 = _a.sent();
                res.send({ AllData: AllData_1 });
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
                return [4 /*yield*/, createModel_1.Category.find({})];
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
exports.getSelectedCategory = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var category, categoryID, categoryIDString, AllData_2, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                category = req.body.category;
                console.log(category);
                return [4 /*yield*/, createModel_1.Category.find({ name: category }).select({
                        _id: 1
                    })];
            case 1:
                categoryID = _a.sent();
                categoryIDString = categoryID[0]._id.toString();
                console.log(categoryIDString);
                return [4 /*yield*/, AllData_2.find({
                        category: categoryIDString
                    }).populate("category")];
            case 2:
                AllData_2 = _a.sent();
                console.log(AllData_2);
                res.send({ AllData: AllData_2 });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                console.log(error_3);
                res.status(500).send("error");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteAllData = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, AllDataIndex, AllData_3, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                _id = req.body;
                console.log(_id);
                if (!_id)
                    throw new Error("uis not found");
                return [4 /*yield*/, AllData_3.findByIdAndDelete(_id)];
            case 1:
                AllDataIndex = _a.sent();
                return [4 /*yield*/, AllData_3.find({})
                        .populate("category")
                        .populate("program")
                        .exec()];
            case 2:
                AllData_3 = _a.sent();
                res.send({ AllData: AllData_3 });
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                console.log(error_4);
                res.status(500).send("didn't get AllData to delete");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.addBook = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, price, pic, category, categoryID, categoryIDString, newBook, books, error_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, name = _a.name, price = _a.price, pic = _a.pic, category = _a.category;
                return [4 /*yield*/, createModel_1.Category.find({ name: category }).select({
                        _id: 1
                    })];
            case 1:
                categoryID = _b.sent();
                categoryIDString = categoryID[0]._id.toString();
                console.log(categoryIDString);
                return [4 /*yield*/, Book.create({
                        name: name,
                        price: price,
                        pic: pic,
                        category: categoryIDString
                    })];
            case 2:
                newBook = _b.sent();
                return [4 /*yield*/, Book.find({})
                        .populate("category")
                        .populate("client")
                        .exec()];
            case 3:
                books = _b.sent();
                res.send({ books: books });
                return [3 /*break*/, 5];
            case 4:
                error_5 = _b.sent();
                console.log(error_5);
                res.status(500).send("didn't get data");
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.addCategory = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, website, nerCategory, error_6;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name = _a.name, website = _a.website;
                return [4 /*yield*/, createModel_1.Category.create({ name: name, website: website })];
            case 1:
                nerCategory = _b.sent();
                res.status(200).send({ ok: true });
                return [3 /*break*/, 3];
            case 2:
                error_6 = _b.sent();
                console.log(error_6);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addClient = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, nameID, name, phone, age, email, book, newClient, bookID, clientId, bookIDString, clientIDString, updateBook_1, books, error_7;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 7]);
                _a = req.body, nameID = _a.nameID, name = _a.name, phone = _a.phone, age = _a.age, email = _a.email, book = _a.book;
                return [4 /*yield*/, Client.create({
                        nameID: nameID,
                        name: name,
                        phone: phone,
                        age: age,
                        email: email
                    })];
            case 1:
                newClient = _b.sent();
                console.log(newClient);
                return [4 /*yield*/, Book.find({ name: book }).select({ _id: 1 })];
            case 2:
                bookID = _b.sent();
                return [4 /*yield*/, Client.find({ nameID: nameID }).select({ _id: 1 })];
            case 3:
                clientId = _b.sent();
                console.log(clientId);
                console.log(bookID);
                bookIDString = bookID[0]._id.toString();
                clientIDString = clientId[0]._id.toString();
                console.log(bookIDString);
                console.log(clientIDString);
                return [4 /*yield*/, Book.findByIdAndUpdate(bookIDString, { $push: { client: clientIDString } }, { "new": true })];
            case 4:
                updateBook_1 = _b.sent();
                return [4 /*yield*/, Book.find({})
                        .populate("category")
                        .populate("client")
                        .exec()];
            case 5:
                books = _b.sent();
                res.send({ books: books });
                return [3 /*break*/, 7];
            case 6:
                error_7 = _b.sent();
                console.log(error_7);
                res.status(500).send("didn't get data");
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.getSelectedPriceUp = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var priceUp, books, error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                priceUp = req.body.priceUp;
                console.log(priceUp);
                return [4 /*yield*/, Book.find({
                        price: { $gt: priceUp }
                    })
                        .populate("client")
                        .populate("category")
                        .exec()];
            case 1:
                books = _a.sent();
                console.log(books);
                res.send({ books: books });
                return [3 /*break*/, 3];
            case 2:
                error_8 = _a.sent();
                console.log(error_8);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getSelectedPriceDown = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var priceDown, books, error_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                priceDown = req.body.priceDown;
                console.log(priceDown);
                return [4 /*yield*/, Book.find({
                        price: { $lt: priceDown }
                    })
                        .populate("client")
                        .populate("category")
                        .exec()];
            case 1:
                books = _a.sent();
                console.log(books);
                res.send({ books: books });
                return [3 /*break*/, 3];
            case 2:
                error_9 = _a.sent();
                console.log(error_9);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getSelectedPrices = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, priceS, priceE, books, error_10;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, priceS = _a.priceS, priceE = _a.priceE;
                console.log(priceS, priceE);
                return [4 /*yield*/, Book.find({
                        price: { $gte: priceS, $lte: priceE }
                    })
                        .populate("client")
                        .populate("category")
                        .exec()];
            case 1:
                books = _b.sent();
                console.log(books);
                res.send({ books: books });
                return [3 /*break*/, 3];
            case 2:
                error_10 = _b.sent();
                console.log(error_10);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateBook = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _id, name, price, pic, category, book, categoryID, categoryIDString, books, error_11;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 7]);
                _a = req.body, _id = _a._id, name = _a.name, price = _a.price, pic = _a.pic, category = _a.category;
                return [4 /*yield*/, Book.findById(_id).populate("category")];
            case 1:
                book = _b.sent();
                if (name)
                    book.name = name;
                if (price)
                    book.price = price;
                if (pic)
                    book.pic = pic;
                if (!category) return [3 /*break*/, 3];
                return [4 /*yield*/, createModel_1.Category.find({ name: category }).select({
                        _id: 1
                    })];
            case 2:
                categoryID = _b.sent();
                categoryIDString = categoryID[0]._id.toString();
                book.category = categoryIDString;
                _b.label = 3;
            case 3: return [4 /*yield*/, book.save()];
            case 4:
                _b.sent();
                console.log(book);
                return [4 /*yield*/, Book.find({})
                        .populate("category")
                        .populate("client")
                        .exec()];
            case 5:
                books = _b.sent();
                res.send({ books: books });
                return [3 /*break*/, 7];
            case 6:
                error_11 = _b.sent();
                console.log(error_11);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.getSelectedPriceCa = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, category, priceS, priceE, categoryID, categoryIDString, books, error_12;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, category = _a.category, priceS = _a.priceS, priceE = _a.priceE;
                console.log(category, priceS, priceE);
                return [4 /*yield*/, createModel_1.Category.find({ name: category }).select({
                        _id: 1
                    })];
            case 1:
                categoryID = _b.sent();
                categoryIDString = categoryID[0]._id.toString();
                console.log(categoryIDString);
                return [4 /*yield*/, Book.find({
                        category: categoryIDString
                    })
                        .find({
                        price: { $gte: priceS, $lte: priceE }
                    })
                        .populate("category")];
            case 2:
                books = _b.sent();
                console.log(books);
                res.send({ books: books });
                return [3 /*break*/, 4];
            case 3:
                error_12 = _b.sent();
                console.log(error_12);
                res.status(500).send("error");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
