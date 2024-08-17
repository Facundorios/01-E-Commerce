import { Router } from "express";

import { register, login } from "../controllers/user.controllers.js";

import {
  authSchema,
  createSchema,
} from "../middlewares/validations/schemas/users.schemas.js";

import { validate } from "../middlewares/express-validator.js";

const userRoutes = Router();

//Auth routes
userRoutes.post("/signup", createSchema, validate, register);
userRoutes.post("/signin", authSchema, validate, login);

export default userRoutes;
