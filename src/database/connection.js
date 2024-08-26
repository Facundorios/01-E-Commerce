import { connect } from "mongoose";
import { MONGO_URI } from "../configs/env/config.js";

export const databaseConnection = async () => {
  try {
    await connect(MONGO_URI);
    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting to the database", error);
  }
};
