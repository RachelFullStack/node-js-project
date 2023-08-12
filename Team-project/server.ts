import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { Schema, model } from "mongoose";

dotenv.config();

const app = express();
const uri: string | undefined = process.env.MONGOOSE_URI + "Training";

if (uri) {
  mongoose
    .connect(uri)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB error :", err));
} else {
  console.log("No URI");
}

app.use(express.json());

const UserSchema = new Schema({ name: String, src: String });
const UserModel = mongoose.model("users", UserSchema);

app.get("/api/user-get", async (req: any, res: any) => {
  try {
    const users = await UserModel.find({});
    res.send({ users });
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
