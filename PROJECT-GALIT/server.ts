import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { Schema, model } from "mongoose";
import user from "./route";
import User from "./Model";
import create from "./route";
import cookieParser from "cookie-parser";

dotenv.config();

const uri: string | undefined = process.env.MONGOOSE_URI + "Training";
if (uri) {
  mongoose
    .connect(uri)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB error :", err));
} else {
  console.log("No URI");
}

const app = express();
app.use(express.json());

app.use(cookieParser());
app.use(express.static("./client"));
app.use("/api/", user);
app.use("/program/", create);

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
