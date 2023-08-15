import express from "express";
import mongoose, {Schema} from mongoose;
// import mongoose from "mongoose";
import * as dotenv from "dotenv";
import router from "./API/users/usersRoute";
import  cookieParser  from "cookie-parser";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static("./client"));
app.use("/api/", router);

const uri: string | undefined = process.env.MONGOOSE_URI + "Fitness-App";

if (uri) {
  mongoose
    .connect(uri)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB error :", err));
} else {
  console.log("No URI");
}

const myPort = 3000;
app.listen(3000, () => {
  console.log(`server listen in http://localhost:${myPort}`);
});
