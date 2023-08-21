import mongoose from "mongoose";

/*
This is a program schema of the program
*/
const ProgramSchema = new mongoose.Schema({
  Exercise: String,
  image: String,
  sets: Number,
  reps: Number,
});

const Program = mongoose.model("program", ProgramSchema);

export default Program;
