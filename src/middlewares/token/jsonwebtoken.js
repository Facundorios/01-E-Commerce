import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../configs/config.js";

export const sign = (payload) => {
  return jwt.sign(payload, JWT_SECRET);
};
