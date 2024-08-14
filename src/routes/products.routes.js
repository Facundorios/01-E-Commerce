import { Router } from "express";
import {
  create,
  get,
  getById,
  seed,
} from "../controllers/products.controllers.js";

import { createSchema } from "../middlewares/validations/products.schemas.js";
import { validate } from "../middlewares/express-validator.js";

const productsRoutes = Router();

productsRoutes.post("/product/create", createSchema, validate, create);
productsRoutes.get("/product/seed", seed);
productsRoutes.get("/products", get);
productsRoutes.get("/product/:id", getById);

export default productsRoutes;
