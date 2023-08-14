import mongoose, { Schema } from "mongoose";

const categorySchema = new mongoose.Schema({
  Days: Number,
  Equipment: String,
  Level: String,
  WorkoutTime: String,
});

export const Category = mongoose.model("Category", categorySchema);

const ProgramSchema = new mongoose.Schema({
  Exercise: String,
  image: String,
  sets: Number,
  reps: Number,
});

export const program = mongoose.model("program", ProgramSchema);

const AllDataSchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },

  program: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "program",
    },
  ],
});

export const AllDataModel = mongoose.model("AllData", AllDataSchema);

export default AllDataModel;
