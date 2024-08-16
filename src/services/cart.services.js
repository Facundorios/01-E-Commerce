import Cart from "../models/Cart.js";

class CartService {
  async get() {
    return await Cart.find();
  }
}

export default new CartService();
