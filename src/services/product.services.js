import { seed } from "../seed/product.seed.js";
import Product from "../models/Product.js";

class ProductService {
  // constructor() {}

  async seed(userId) {
    const productsId = seed.map((product) => {
      return { ...product, sellerId: userId };
    });
    return await Product.insertMany(productsId);
  }

  async find() {
    return await Product.find();
  }

  async create(product) {
    return await Product.create(product);
  }

  async findById(id) {
    return await Product.findById(id);
  }

  async delete(id) {
    return await Product.findByIdAndDelete(id);
  }
}

export default new ProductService();
