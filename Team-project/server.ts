import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { Schema, model } from "mongoose";
import userRouter from "./users/usersRoute";
import createRouter from "./create-program/createRoute";
import cookieParser from "cookie-parser";
import User from "./users/usersModel";
import jwt from "jwt-simple";

const secret: string = process.env.JWT_SECRET as string;
dotenv.config();

const app = express();
app.use(express.json());

app.use(cookieParser());
app.use(express.static("./client"));
app.use("/api/", userRouter);
app.use("/program/", createRouter);

const uri: string | undefined = process.env.MONGOOSE_URI + "Training";

if (uri) {
  mongoose
    .connect(uri)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB error :", err));
} else {
  console.log("No URI");
}

// app.get("/api/user-get", async (req: any, res: any) => {
//   try {
//     const users = await User.find({});
//     res.send({ users });
//   } catch (error) {
//     console.log(error);
//   }
// });

app.post("/program/add-workout-data", async (req: any, res: any) => {
  try {
    const { workoutData } = req.body;
    console.log("Received workout data:", workoutData);
    res.status(200).json({ message: "Workout data saved successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save workout data." });
  }
});

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
