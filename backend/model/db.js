import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL); // ✅ Await the connection
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // ❗️Optional but good: stop app if DB fails
    }
}
