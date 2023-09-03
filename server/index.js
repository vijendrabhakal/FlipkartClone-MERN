import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import DefaultData from "./default.js";
import Router from "./routes/route.js";

dotenv.config();

const mongoURI = process.env.MONGODB_URI;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

connectToMongo();

const app = express();
const PORT = process.env.PORT || 5000;

//Routes
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

DefaultData();
