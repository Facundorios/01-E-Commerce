import { Router } from "express";
import { addToCart } from "../controllers/cart.controllers.js";

const cartRoutes = Router();

cartRoutes.post("/add", addToCart);
cartRoutes.get("/my-cart");

export default cartRoutes;
