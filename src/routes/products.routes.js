import { Router } from "express";
import {
  createProduct,
  getProducts,
} from "../controllers/products.controllers.js";

const productsRoutes = Router();

productsRoutes.get("/products", getProducts);
productsRoutes.post("/product", createProduct);

export default productsRoutes;
