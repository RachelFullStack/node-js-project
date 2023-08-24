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

export const AllWorkoutData = mongoose.model("allWorkoutData", workoutSchema);

export default AllWorkoutData;
