import jwt from "jsonwebtoken";

import { JWT_SECRET } from "../configs/env/config.js";

import orderServices from "../services/order.services.js";

export const getAll = async (req, res) => {
  let token = req.headers.authorization.split(" ")[1];
  const userId = jwt.verify(token, JWT_SECRET).id;

  try {
    let orders = await orderServices.findAll(userId);
    res.status(200).json({ message: "Estas son tus ordenes", orders });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const create = async (req, res) => {
  let token = req.headers.authorization;
  token = token.split(" ")[1];

  const userId = jwt.verify(token, JWT_SECRET).id;
  const { cartId, order } = req.body;
  try {
    let create = await orderServices.create(userId, cartId, order);
    res.status(201).json({ message: "Orden creada", create });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
