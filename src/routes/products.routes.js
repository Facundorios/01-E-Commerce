import { Router } from "express";
import {
  seed,
  get,
  getById,
  create,
  remove,
} from "../controllers/products.controllers.js";

import {
  createSchema,
  removeSchema,
} from "../middlewares/validations/products.schemas.js";
import { validate } from "../middlewares/express-validator.js";

const productRoutes = Router();

productRoutes.get("/seed", seed);
productRoutes.get("/all", get);
productRoutes.get("/:id", getById);
productRoutes.post("/create", createSchema, validate, create);
productRoutes.delete("/delete/:id", removeSchema, validate, remove);

export default productRoutes;
