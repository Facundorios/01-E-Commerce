import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../../configs/env/config.js";

export const auth = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res
      .status(401)
      .json({ message: "Requieres de un token para la petición." });
  }
  let token = req.headers.authorization;
  token = token.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Requieres de un token para la petición." });
  }
  next();
};

export const seller = async (req, res, next) => {
  let token = req.headers.authorization;
  token = token.split(" ")[1];

  let verif = jwt.verify(token, JWT_SECRET);
  if (verif.role !== "seller") {
    return res
      .status(403)
      .json({ message: "Tienes que ser un vendedor para esta acción." });
  }
  next();
};

export const admin = async (req, res, next) => {
  let token = req.headers.authorization;
  token = token.split(" ")[1];

  let verif = jwt.verify(token, JWT_SECRET);
  if (verif.role !== "admin") {
    return res
      .status(403)
      .json({ message: "Tienes que ser un admin para esta acción." });
  }
  next();
};
