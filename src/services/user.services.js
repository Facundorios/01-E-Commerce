import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/User.js";
import { JWT_SECRET } from "../configs/env/config.js";

class UserService {
  async register(user) {
    try {
      const exist = await User.findOne({ email: user.email });
      if (exist) throw new Error("Usuario con este email ya existe");

      const password = await bcrypt.hash(user.password, 10);
      const create = await User.create({ ...user, password });

      const token = jwt.sign({ id: create.id, role: create.role }, JWT_SECRET);
      return { message: `Bienvenido, ${create.name}`, token };
    } catch (error) {
      return {
        status: error.statusCode,
        message: error.message,
      };
    }
  }

  async login(user) {
    try {
      const exist = await User.findOne({ email: user.email });
      if (!exist) throw new Error("Usuario no encontrado");

      const valid = await bcrypt.compare(user.password, exist.password);
      if (!valid) throw new Error("Contraseña incorrecta.");

      const token = jwt.sign({ id: exist.id, role: exist.role }, JWT_SECRET);
      return { message: `Bienvenido, ${exist.name}`, token };
    } catch (error) {
      return {
        status: error.statusCode,
        message: error.message,
      };
    }
  }
}

export default new UserService();
