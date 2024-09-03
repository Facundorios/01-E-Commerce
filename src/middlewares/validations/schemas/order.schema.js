import { body, param } from "express-validator";

export const createSchema = [
  body("cartId")
    .exists()
    .withMessage("El carrito es requerido.")
    .isMongoId()
    .withMessage("El carrito no es válido."),
  body("order.paymentMethod")
    .exists()
    .withMessage("El método de pago es requerido.")
    .isString()
    .isIn(["Visa", "Mastercard", "PayPal", "MercadoPago"])
    .withMessage(
      "El método de pago no es válido, debe ser uno de estos: Visa, Mastercard, PayPal, MercadoPago."
    ),
  body("order.shippingAddress.street")
    .exists()
    .withMessage("La calle es requerida.")
    .isString()
    .withMessage("La calle debe ser una cadena de texto."),
  body("order.shippingAddress.city")
    .exists()
    .withMessage("La ciudad es requerida.")
    .isString()
    .withMessage("La ciudad debe ser una cadena de texto."),
  body("order.shippingAddress.postalCode")
    .exists()
    .withMessage("El código postal es requerido.")
    .isString()
    .withMessage("El código postal debe ser una cadena de texto."),
  body("order.shippingAddress.country")
    .exists()
    .withMessage("El país es requerido.")
    .isString()
    .withMessage("El país debe ser una cadena de texto."),
];

export const updateSchema = [
  param("orderId")
    .exists()
    .withMessage("El id de la orden es requerido.")
    .isMongoId()
    .withMessage("El id de la orden no es válido."),
  body("status")
    .exists()
    .withMessage("El estado es requerido.")
    .isString()
    .isIn(["pending", "shipped", "delivered", "cancelled"])
    .withMessage(
      "El estado no es válido, debe ser uno de estos: pending, approved, rejected, cancelled."
    ),
];
