import mongoose, { Schema } from "mongoose";

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
