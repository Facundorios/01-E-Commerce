import { Router } from "express";
import {
  createProductCtrl,
  getProductsCtrl,
} from "../controllers/products.controllers.js";

const productsRouter = Router();

productsRouter.get("/products", getProductsCtrl);
productsRouter.post("/product", createProductCtrl);

export default productsRouter;
