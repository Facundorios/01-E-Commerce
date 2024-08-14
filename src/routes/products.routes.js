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

const productsRoutes = Router();

productsRoutes.post("/product/create", createSchema, validate, create);
productsRoutes.get("/product/seed", seed);
productsRoutes.get("/products", get);
productsRoutes.get("/product/:id", getById);
productsRoutes.delete("/product/delete/:id", removeSchema, validate, remove);

export default productsRoutes;
