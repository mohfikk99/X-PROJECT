import express from "express";
import mongoose from "mongoose";
import tourRoutes from "./routes/tourRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

const app = express();

mongoose.connect("mongodb://localhost:27017/project");
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('database connected'));

app.use(cors());
app.use(express.json());
app.use('/tour', tourRoutes);
app.use('/user', userRoutes);

app.listen('5000', () => console.log('server running at port : 5000'));