import mongoose from "mongoose";

// Scheme for category
const categorySchema = new mongoose.Schema({
  Title: String,
  Days: Number,
  Equipment: String,
  Level: String,
  WorkoutTime: String,
});

const Category = mongoose.model("category", categorySchema);
export default Category;
