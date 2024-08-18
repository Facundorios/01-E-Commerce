import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

class CartService {
  async get() {
    return await Cart.find();
  }

  async addToCart(user, productId, quantity) {
    const cart = await Cart.findOne({ userId: user._id });
    const product = await Product.findById(productId);

    if (!product) res.status(404).json({ message: "Producto no encontrado." });

    if (quantity > product.stock)
      res.status(400).json({ message: "No hay suficiente stock" });

    const productInCart = cart.products.find((p) => p.productId == productId);
    if (productInCart) {
      productInCart.quantity += quantity;
    } else {
      cart.products.push({ productId, quantity });
    }

    await cart.save();
    return { cart, product };
  }
}

export default new CartService();
