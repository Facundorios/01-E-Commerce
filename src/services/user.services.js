import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/User.js";
import { JWT_SECRET } from "../configs/config.js";
class UserService {
  async register(user) {
    try {
      const exist = await User.findOne({ email: user.email });
      if (exist) throw new Error("Usuario con este email ya existe");

      const password = await bcrypt.hash(user.password, 10);
      const createUser = await User.create({ ...user, password });

      const token = jwt.sign(
        { id: createUser.id, role: createUser.role },
        JWT_SECRET
      );
      return { message: `Bienvenido, ${createUser.name}`, token };
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

      const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET);
      return { message: `Bienvenido, ${exist.name}` };
    } catch (error) {
      return {
        status: error.statusCode,
        message: error.message,
      };
    }
  }
}

export default new UserService();
