import jwt from "jsonwebtoken";

import cartServices from "../services/cart.services.js";
import { JWT_SECRET } from "../configs/config.js";

export const addToCart = async (req, res) => {
  try {
    //Extraemos el token y  los parametros
    const token = req.headers.authorization.split(" ")[1];
    const id = jwt.verify(token, JWT_SECRET).id;

    const { productId, quantity } = req.body;

    console.log({ id, productId, quantity });

    await cartServices.addToCart(id, productId, quantity);
    res.status(200).json({ message: "Producto añadido al carrito" });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Error al añadir producto al carrito",
      status: error.status,
    });
  }
};
