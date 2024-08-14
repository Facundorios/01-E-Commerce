import { UserService } from "../services/index.js";
import { handleDBErrors } from "../configs/errors.js";

export const get = async (req, res) => {
  try {
    const users = await UserService.find();
    if (!users) throw { statusCode: 404, message: "Usuarios no encontrados" };
    return res.json(users);
  } catch (error) {
    handleDBErrors(error);
  }
};
export const getById = async (req, res) => {
  try {
    const user = await UserService.findById(req.params.id);
    if (!user) throw { statusCode: 404, message: "Usuario no encontrado" };
    return res.json(user);
  } catch (error) {
    handleDBErrors(error);
  }
};
export const create = async (req, res) => {
  try {
    const user = await UserService.create(req.body);
    return res.json(user);
  } catch (error) {
    handleDBErrors(error);
  }
};
export const remove = async (req, res) => {
  try {
    const user = await UserService.delete(req.params.id);
    return res.json({ message: "Usuario eliminado exitosamente" });
  } catch (error) {
    handleDBErrors(error);
  }
};
