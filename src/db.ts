import mongoose from "mongoose";


export const connectDB = async () => {
   
  try {
    console.log(process.env.DATABASE_URL!)
    await mongoose.connect(process.env.DATABASE_URL!);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};
