import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; 

app.get("/", (req, res) => {
  res.send("Server is running!");
});

const connectToMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/sabari");
    console.log("Connected to MongoDB");
    console.log("Database Name:", mongoose.connection.name);
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

app.listen(3000, () => {
  console.log(`Server Running on PORT ${PORT}!`);
  connectToMongoDB();
});

app.use('/api/user',userRoutes);