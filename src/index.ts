import express from "express";
import { connectDB } from "./db";
import "dotenv/config";
import { Job } from "./model/job";

import cors from "cors";

const app = express();
connectDB();

app.use(cors());

app.get("/all", async function (req, res) {
  const page = parseInt(req.query.page as string) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;
  try {
    const data = await Job.find({})
      .sort({ postedDateTime: 1 })
      .limit(limit)
      .skip(skip);

    if (data) {
      res.status(200).json({ data });
    } else {
      res.status(404).json({ message: "not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "error while getting jobs" });
  }
});

app.get("/byLocation", async (req, res) => {
  try {
    const location = req.query.location;
    const page = parseInt(req.query.page as string) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const data = await Job.find({
      location: { $regex: location, $options: "i" },
    })
      .limit(limit)
      .skip(skip);

    if (data.length > 0) {
      res.status(200).json({ data });
    } else {
      res.status(404).json({ message: "jobs does not exist" });
    }
  } catch (error) {
    res.status(500).json({ message: "job does not exist" });
  }
});

app.listen(3000);
