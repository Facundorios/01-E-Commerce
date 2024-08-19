import Cart from "../models/Cart.js";

class CartService {
  async get(userId) {
    const cart = await Cart.findOne({ userId }).populate("products.productId");

    const productMap = {};
    cart.products.forEach((product) => {
      const id = product.productId._id.toString();
      if (productMap[id]) productMap[id].quantity + product.quantity;
      else {
        productMap[id] = {
          quantity: product.quantity,
          product: {
            name: product.productId.name,
            price: product.productId.price,
          },
        };
      }
    });

    const products = Object.values(productMap);
    return { message: "My cart products", products };
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
