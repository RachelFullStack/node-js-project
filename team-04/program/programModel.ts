import mongoose from "mongoose";

// Scheme for program
const ProgramSchema = new mongoose.Schema({
  Exercise: String,
  image: String,
  sets: Number,
  reps: Number,
});

const Program = mongoose.model("program", ProgramSchema);

export default Program;
