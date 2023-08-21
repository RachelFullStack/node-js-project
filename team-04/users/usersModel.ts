import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  userName: {
    type: String,
    require,
    unique: true,
  },

  userPassword: {
    type: String,
    require,
  },

  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
});

const User = mongoose.model("users", userSchema);

export default User;
