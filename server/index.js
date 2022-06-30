import express from "express";
import dotenv from 'dotenv';
dotenv.config()
import mongoose from "mongoose";


const app = express();
// Middleware
app.use(express());

app.get('/', (req, res) => {

    res.send('WELCOME TO THE NODE.js')
})

// CONNECT
const connect = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL);
  } catch (error) {
    console.log(error);
  }
};


app.listen(5000 || process.env.PORT, () => {
  connect();
  console.log("connected");
});
