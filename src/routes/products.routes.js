import { Router } from "express";
import {
  create,
  get,
  getById,
  seed,
} from "../controllers/products.controllers.js";

const productsRoutes = Router();

productsRoutes.post("/product", create);
productsRoutes.get("/product/seed", seed);
productsRoutes.get("/products", get);
productsRoutes.get("/product/:id", getById);

export default productsRoutes;
