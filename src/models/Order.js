import { model, Schema } from "mongoose";

const orderSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    cartId: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    shippingAddress: {
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      postalCode: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const Order = model("orders", orderSchema);
export default Order;
