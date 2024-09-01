import Order from "../models/Order.js";

class OrderService {
  async findAll(userId) {
    return await Order.find({ userId }).sort({ createdAt: -1 });
  }

  async create(userId, cartId, order) {
    return await Order.create({ ...order, userId, cartId });
  }
}

export default new OrderService();
