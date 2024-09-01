import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    surname: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: String,
    role: {
      type: String,
      enum: ["admin", "client", "seller"],
      default: "client",
    },
  },
  {
    timestamps: true,
  }
);

const User = model("users", userSchema);
export default User;
