import jwt from "jsonwebtoken";

import { JWT_SECRET } from "../configs/env/config.js";

import orderServices from "../services/order.services.js";

export const getAll = async (req, res) => {
  try {
    let orders = await orderServices.findAll();
    res.status(200).json({ message: "Here are all orders:", orders });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getAllByUser = async (req, res) => {
  let token = req.headers.authorization.split(" ")[1];
  const userId = jwt.verify(token, JWT_SECRET).id;

  try {
    let orders = await orderServices.findByUser(userId);
    res.status(200).json({ message: "Here are yours orders:", orders });
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
    const create = await orderServices.create(order, userId, cartId);
    res.status(201).json({ message: "Orden created", create });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const update = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    await orderServices.patch(orderId, status);
    res.status(200).json({ message: "Order updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
