import { connect } from "mongoose";
import { MONGO_URI } from "../configs/config.js";

export const db = async () => {
  try {
    await connect(MONGO_URI);
    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting to the database", error);
  }
};
