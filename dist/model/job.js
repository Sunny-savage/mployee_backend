"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const jobSchema = new mongoose_1.default.Schema({
    jobId: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    jobLink: {
        type: String,
        required: true,
    },
    seniorityLevel: {
        type: String,
    },
    employmentType: {
        type: String,
    },
    source: {
        type: String,
    },
    experience: {
        type: String,
    },
    companyUrl: {
        type: String,
    },
    companyImageUrl: {
        type: String,
    },
    postedDateTime: {
        type: Date,
    },
    minExp: {
        type: Number,
    },
    maxExp: {
        type: Number,
    },
    country: {
        type: String,
    },
    companyType: {
        type: String,
    },
});
exports.Job = mongoose_1.default.model("Job", jobSchema);
