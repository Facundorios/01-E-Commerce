import { Schema, Types } from "mongoose";

const cartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "products",
      },
      quantity: Number,
    },
  ],
});

const Cart = model("carts", cartSchema);
export default Cart;
