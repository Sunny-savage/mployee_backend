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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
require("dotenv/config");
const job_1 = require("./model/job");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
(0, db_1.connectDB)();
app.use((0, cors_1.default)());
app.get("/all", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const page = parseInt(req.query.page) || 1;
        const limit = 10;
        const skip = (page - 1) * limit;
        try {
            const data = yield job_1.Job.find({})
                .sort({ postedDateTime: 1 })
                .limit(limit)
                .skip(skip);
            if (data) {
                res.status(200).json({ data });
            }
            else {
                res.status(404).json({ message: "not found" });
            }
        }
        catch (error) {
            res.status(500).json({ message: "error while getting jobs" });
        }
    });
});
app.get("/byLocation", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const location = req.query.location;
        const page = parseInt(req.query.page) || 1;
        const limit = 10;
        const skip = (page - 1) * limit;
        const data = yield job_1.Job.find({
            location: { $regex: location, $options: "i" },
        })
            .limit(limit)
            .skip(skip);
        if (data.length > 0) {
            res.status(200).json({ data });
        }
        else {
            res.status(404).json({ message: "jobs does not exist" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "job does not exist" });
    }
}));
app.listen(3000);
