import { seed } from "../seed/product.seed.js";
import Product from "../models/Product.js";

class ProductService {
  constructor() {}

  async findAll() {
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

  async seed() {
    return await Product.insertMany(seed);
  }
}

export default new ProductService();
