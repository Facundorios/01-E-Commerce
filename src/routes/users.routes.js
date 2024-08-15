import { Router } from "express";

import {
  get,
  getById,
  create,
  login,
  remove,
} from "../controllers/users.controllers.js";

import {
  authSchema,
  createSchema,
  removeSchema,
} from "../middlewares/validations/users.schemas.js";

import { validate } from "../middlewares/express-validator.js";

const userRoutes = Router();

//Public Routes
userRoutes.get("/users", get);
userRoutes.get("/user/:id", getById);

//Auth routes
userRoutes.post("/auth/signup", createSchema, validate, create);

//Admin routes
userRoutes.delete("/user/delete/:id", removeSchema, validate, remove);

export default userRoutes;
