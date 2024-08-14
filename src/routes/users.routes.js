import { Router } from "express";
import {
  get,
  getById,
  create,
  remove,
} from "../controllers/users.controllers.js";

const userRoutes = Router();

userRoutes.get("/users", get);

export default userRoutes;
