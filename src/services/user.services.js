import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/User.js";
import { JWT_SECRET } from "../configs/config.js";
class UserService {
  async find() {
    try {
      return await User.find();
    } catch (error) {
      return {
        status: error.statusCode,
        message: error.message,
      };
    }
  }
  async findById(id) {
    try {
      return await User.findById(id);
    } catch (error) {
      return {
        status: error.statusCode,
        message: error.message,
      };
    }
  }

  async create(user) {
    try {
      const exists = await User.findOne({ email: user.email });
      if (exists) throw new Error("Usuario con este email ya existe");

      const password = await bcrypt.hash(user.password, 10);
      await User.create({ ...user, password });

      const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET);
      return { token };
    } catch (error) {
      return {
        status: error.statusCode,
        message: error.message,
      };
    }
  }

  async login(user) {
    const exists = await User.findOne({ email: user.email });
    if (!exists) throw new Error("Usuario no encontrado");

    const valid = bcrypt.compare(user.password, exists.password);
    if (!valid) throw new Error("Contraseña incorrecta.");

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET);
    return { message: `Bienvenido, ${exists.name}`, token };
  }

  async delete(id) {
    try {
      const user = await User.findByIdAndDelete(id);
      if (!user) throw new Error("Usuario no encontrado");

      return { message: "Usuario eliminado exitosamente" };
    } catch (error) {
      return {
        status: error.statusCode,
        message: error.message,
      };
    }
  }
}

export default new UserService();
