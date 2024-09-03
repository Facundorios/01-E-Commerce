import { Router } from "express";
import {
  create,
  getAllByUser,
  getAll,
  update,
} from "../controllers/order.controllers.js";

import {
  createSchema,
  updateSchema,
} from "../middlewares/validations/schemas/order.schema.js";
import { validate } from "../middlewares/express-validator.js";

import { auth } from "../middlewares/validations/auth/authentication.js";
import { role } from "../middlewares/validations/auth/authorization.js";

const orderRouter = Router();

orderRouter.get("/my-orders", auth, role("client"), getAllByUser);
orderRouter.post(
  "/create",
  auth,
  role("client"),
  createSchema,
  validate,
  create
);
orderRouter.get("/all-orders", auth, role("admin"), getAll);
orderRouter.patch(
  "/update/:orderId",
  auth,
  role("admin"),
  updateSchema,
  validate,
  update
);

export default orderRouter;
