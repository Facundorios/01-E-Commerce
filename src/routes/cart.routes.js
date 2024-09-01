import { Router } from "express";

import { add, get } from "../controllers/cart.controllers.js";
import { auth } from "../middlewares/validations/auth/authentication.js";

const cartRoutes = Router();

cartRoutes.post("/add-product", auth, add);
cartRoutes.get("/my-cart", auth, get);

export default cartRoutes;
