import mongoose from "mongoose";

//create userSchema 
const userSchema = await mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address",
    ],
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = await mongoose.model("User", userSchema);
export default User;
