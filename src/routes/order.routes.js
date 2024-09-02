import { Router } from "express";
import { create, getAll } from "../controllers/order.controllers.js";

import { createSchema } from "../middlewares/validations/schemas/order.schema.js";
import { validate } from "../middlewares/express-validator.js";

import { auth } from "../middlewares/validations/auth/authentication.js";
import { role } from "../middlewares/validations/auth/authorization.js";

const orderRouter = Router();

orderRouter.get("/my-orders", auth, role("client"), getAll);
orderRouter.post(
  "/create",
  auth,
  role("client"),
  createSchema,
  validate,
  create
);

export default orderRouter;
