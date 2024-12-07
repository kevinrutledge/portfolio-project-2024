import "dotenv/config";
import connectDB from "./db";
import mongoose from "mongoose";

async function testConnection() {
  try {
    await connectDB();
    console.log("MongoDB Connection State:", mongoose.connection.readyState);

    if (mongoose.connection.readyState === 1) {
      console.log("Successfully connected to MongoDB.");
    } else {
      console.log("Failed to connect to MongoDB.");
    }
  } catch (error) {
    console.error("Database connection test failed:", error);
  } finally {
    await mongoose.connection.close();
    process.exit();
  }
}

testConnection();
