import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { Schema, model } from "mongoose";
import routerUserRouter from "./users/usersRoute";
import routerCreateRouter from "./create-program/createRoute";
import cookieParser from "cookie-parser";
import User from "./users/usersModel";

dotenv.config();

const app = express();
app.use(express.json());

app.use(cookieParser());
app.use(express.static("./client"));
app.use("/api/", routerUserRouter);
app.use("/program/", routerCreateRouter);

const uri: string | undefined = process.env.MONGOOSE_URI + "Fit-App";

if (uri) {
  mongoose
    .connect(uri)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB error :", err));
} else {
  console.log("No URI");
}

// const UserSchema = new Schema({ name: String, src: String });
// const UserModel = mongoose.model("users", UserSchema);

app.get("/api/user-get", async (req: any, res: any) => {
  try {
    const users = await User.find({});
    res.send({ users });
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/add-workout-data", async (req: any, res: any) => {
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
