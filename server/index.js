import express from "express";
import dotenv from 'dotenv';
dotenv.config()
import mongoose from "mongoose";
import BillingRoutes from './routes/billings.js';
import cors from 'cors';
import cookieParser from "cookie-parser";
import AuthRoutes from "./routes/auth.js";

const app = express();

// CONNECT
const connect = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL);
  } catch (error) {
    console.log(error);
  }
};


// middleware
app.use(express.json())
app.use(cors({origin:'*'}))
app.use(cookieParser())

// routes
app.use("/api", BillingRoutes);
app.use("/api", AuthRoutes);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something wend worng";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  });
});





app.listen(5000 || process.env.PORT, () => {
  connect();
  console.log("connected");
});
