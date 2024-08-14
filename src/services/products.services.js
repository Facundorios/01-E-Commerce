import { seed } from "../seed/product.seed.js";
import Product from "../models/Product.js";

class ProductService {
  constructor() {}

  async seed() {
    return await Product.insertMany(seed);
  }

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
}

export default new ProductService();
