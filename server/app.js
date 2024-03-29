import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import cors from "cors";
const app = express();
import globalErrorHandler from "./controllers/errorController.js";
import AuthRoutes from "./routes/authRoutes.js";
import UserRoutes from "./routes/usersRoutes.js";
import AppError from "./utils/appError.js";
import cookieParser from "cookie-parser";

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", AuthRoutes);
app.use("/api/users", UserRoutes);


// Error Handler
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});
app.use(globalErrorHandler);


// Connection
const connection = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true
    });
  } catch (error) {
    console.log(error);
  }
};

app.listen(5000 || process.env.PORT, () => {
  connection();
  console.log("connected");
});



