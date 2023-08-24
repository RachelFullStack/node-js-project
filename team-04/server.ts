import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import userRouter from "./users/usersRoute";
import workoutRouter from "./create/createRoute";
import cookieParser from "cookie-parser";
// import cors from "cors";

// import jwt from "jwt-simple";
// const secret: string = process.env.JWT_SECRET as string;

dotenv.config();

const app = express();
app.use(express.json());

app.use(cookieParser());
app.use(express.static("./client"));
app.use("/fitnessApi/", userRouter);
app.use("/fitnessApi/", workoutRouter);

const uri: string | undefined = process.env.MONGOOSE_URI + "-TARTAR";

// mongodb+srv://GalitL:3314402002Ga@cluster0.mrjladc.mongodb.net/project

if (uri) {
  mongoose
    .connect(uri)
    .then(() => console.log("DB connection successful!"))
    .catch((err) => console.log("BD error:", err));
} else {
  console.log("No URI");
}

const myPort = 3000;
app.listen(3000, () => {
  console.log(`server listen in http://localhost:${myPort}`);
});
