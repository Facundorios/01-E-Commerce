import { Router } from "express";
import {
  seed,
  get,
  getById,
  create,
  remove,
} from "../controllers/product.controllers.js";

import {
  createSchema,
  removeSchema,
} from "../middlewares/validations/schemas/products.schemas.js";
import { validate } from "../middlewares/express-validator.js";

import { auth } from "../middlewares/validations/auth/authentication.js";
import { role } from "../middlewares/validations/auth/authorization.js";

const productRoutes = Router();

productRoutes.get("/seed", seed);
productRoutes.get("/all", get);
productRoutes.get("/:id", getById);
productRoutes.post(
  "/create",
  createSchema,
  validate,
  auth,
  role("seller"),
  create
);
productRoutes.delete("/delete/:id", removeSchema, validate, remove);

export default productRoutes;
