import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    surname: String,
    email: String,
    password: String,
    role: String,
  },
  {
    timestamps: true,
  }
);

const User = model("users", userSchema);
export default User;
