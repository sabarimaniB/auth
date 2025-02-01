import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.listen(3000, () => {
  console.log("Server Running on PORT 3000");
});
