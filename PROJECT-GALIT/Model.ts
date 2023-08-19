import mongoose, { Schema } from "mongoose";

///// USER /////
const userSchema = new Schema({
  userName: { type: String, require },
  userPassword: { type: String, require },
  phone: String,
  address: String,
  email: String,
  roll: String,
});

const User = mongoose.model("users", userSchema);

export default User;

///// PROGRAM INFO /////
const InfoSchema = new mongoose.Schema({
  Days: Number,
  Equipment: String,
  Level: String,
  WorkoutTime: String,
});

export const Info = mongoose.model("Info", InfoSchema);

///// PROGRAM TABLE /////
const TableSchema = new mongoose.Schema({
  Exercise: String,
  image: String,
  sets: Number,
  reps: Number,
});

export const Table = mongoose.model("Table", TableSchema);

///// ALL PROGRAM DATA/////
const AllDataSchema = new mongoose.Schema({
  Info: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Info",
  },
  Table: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Table",
    },
  ],
});

export const AllData = mongoose.model("AllData", AllDataSchema);
