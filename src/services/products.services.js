import Product from "../models/Product.js";

export class ProductService {
  constructor() {}

  async findAllProductsSvc() {
    return await Product.find();
  }

  async createProductSvc(product) {
    return await Product.create(product);
  }
}

export default new ProductService();
