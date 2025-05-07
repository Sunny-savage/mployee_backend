import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
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

export const Job = mongoose.model("Job", jobSchema);
