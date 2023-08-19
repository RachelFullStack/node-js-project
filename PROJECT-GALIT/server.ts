import * as express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import router from "./route";

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

app.use(express.static("./client"));
app.use("/", router);

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
