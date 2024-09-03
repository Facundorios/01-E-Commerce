import Order from "../models/Order.js";
import User from "../models/User.js";

class OrderService {
  async findAll() {
    return await Order.find();
  }

  async findByUser(userId) {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    return await Order.find({ userId });
  }

  async create(order, userId, cartId) {
    return await Order.create({ ...order, userId, cartId });
  }

  async patch(orderId, status) {
    return await Order.findByIdAndUpdate(orderId, { status });
  }
}

export default new OrderService();
