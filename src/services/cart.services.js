import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

class CartService {
  async get(userId) {
    const cart = await Cart.findOne({ userId }).populate("products.productId");

    const products = cart.products.map((product) => {
      const { name, price } = product.productId;
      return {
        name,
        price,
        quantity: product.quantity,
      };
    });

    console.log({ message: "My cart products", products });
  }

  async add(userId, productId, quantity) {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      const newCart = new Cart({
        userId: userId,
        products: [{ productId, quantity }],
      });
      return await newCart.save();
    }

    const product = cart.products.find(
      (product) => product.productId == productId
    );
    if (product) product.quantity += quantity;
    cart.products.push({ productId, quantity });

    console.log({ userId, productId, quantity });
    return await cart.save();
  }
}

export default new CartService();
