import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../../configs/config.js";

export const auth = async (req, res, next) => {
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
  //console.log(token);

  let verif = jwt.verify(token, JWT_SECRET);
  //console.log(verif);
  if (verif.role !== "seller") {
    return res
      .status(403)
      .json({ message: "No tienes el rol requerido para esta acción." });
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
      .json({ message: "No tienes el rol requerido para esta acción." });
  }
};
