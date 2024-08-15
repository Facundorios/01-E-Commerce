import User from "../models/User.js";
import bcrypt from "bcrypt";

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
      return await User.create({ ...user, password });
    } catch (error) {
      return {
        status: error.statusCode,
        message: error.message,
      };
    }
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
