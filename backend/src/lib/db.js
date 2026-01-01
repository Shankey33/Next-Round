import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(ENV.DB_URL);
    console.log("Connected to Database successfully");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};
