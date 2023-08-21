import mongoose, { Schema } from "mongoose";

const workoutSchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },

  program: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "program",
    },
  ],
});

export const Workout = mongoose.model("AllData", workoutSchema);

export default Workout;
