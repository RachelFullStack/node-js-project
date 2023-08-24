import mongoose from "mongoose";

const programSchema = new mongoose.Schema({
  Exercise: String,
  image: String,
  sets: Number,
  reps: Number,
});

const Program = mongoose.model("program", programSchema);

export default Program;
