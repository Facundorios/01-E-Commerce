import jwt from "jsonwebtoken";

import { JWT_SECRET } from "../../../configs/env/config.js";

export const role = (role) => {
  return (req, res, next) => {
    let token = req.headers.authorization;
    token = token.split(" ")[1];

    const decodedRole = jwt.verify(token, JWT_SECRET).role;

    if (!decodedRole) {
      return res
        .status(403)
        .json({ message: "No tienes permisos, Token invalido" });
    }

    if (decodedRole !== role) {
      return res
        .status(403)
        .json({ message: `No tienes permisos, debes ser un ${role}` });
    }

    next();
  };
};
