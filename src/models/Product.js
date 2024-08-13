import { model, Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: String,
    price: Number,
    category: String,
    description: String,
    stock: Number,
  },
  {
    timestamps: true,
  }
);

const Product = model("products", productSchema);
export default Product;
