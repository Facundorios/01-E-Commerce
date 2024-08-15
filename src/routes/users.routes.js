import { Router } from "express";
import {
  get,
  getById,
  create,
  remove,
} from "../controllers/users.controllers.js";
import {
  createSchema,
  removeSchema,
} from "../middlewares/validations/users.schemas.js";
import { validate } from "../middlewares/express-validator.js";

const userRoutes = Router();

userRoutes.get("/users", get);
userRoutes.get("/user/:id", getById);
userRoutes.post("/user/create", createSchema, validate, create);
userRoutes.delete("/user/delete/:id", removeSchema, validate, remove);

export default userRoutes;
