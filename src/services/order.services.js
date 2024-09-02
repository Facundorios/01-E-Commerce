import Order from "../models/Order.js";
import User from "../models/User.js";

class OrderService {
  async findAll(userId) {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    return await Order.find({ userId });
  }

  async create(order, userId, cartId) {
    return await Order.create({ ...order, userId, cartId });
  }
}

export default new OrderService();
