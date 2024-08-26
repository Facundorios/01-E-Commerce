import jwt from "jsonwebtoken";

import cartServices from "../services/cart.services.js";
import { JWT_SECRET } from "../configs/env/config.js";

export const get = async (req, res) => {
  try {
    //Extraemos el token y los parametros
    const token = req.headers.authorization.split(" ")[1];
    const id = jwt.verify(token, JWT_SECRET).id;

    const cart = await cartServices.get(id);
    res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Error al obtener carrito",
      status: error.status,
    });
  }
};

export const add = async (req, res) => {
  try {
    //Extraemos el id del token y los parametros del body
    const token = req.headers.authorization.split(" ")[1];
    const userId = jwt.verify(token, JWT_SECRET).id;

    const { productId, quantity } = req.body;
    await cartServices.add(userId, productId, quantity);

    return res.status(200).json({ message: "Producto añadido al carrito" });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Error al añadir producto al carrito",
      status: error.status,
    });
  }
};
