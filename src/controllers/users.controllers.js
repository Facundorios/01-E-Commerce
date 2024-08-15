import { default as UserService } from "../services/user.services.js";

export const get = async (req, res) => {
  try {
    const users = await UserService.find();
    return res.json(users);
  } catch (error) {
    return { status: error.statusCode, message: error.message };
  }
};
export const getById = async (req, res) => {
  try {
    const user = await UserService.findById(req.params.id);
    if (!user) throw { statusCode: 404, message: "Usuario no encontrado" };
    return res.json(user);
  } catch (error) {
    return { status: error.statusCode, message: error.message };
  }
};

export const create = async (req, res) => {
  try {
    const user = await UserService.create(req.body);
    console.log(user);
    return res.json(user);
  } catch (error) {
    return { error: error };
  }
};

export const remove = async (req, res) => {
  try {
    const user = await getById(req.params.id);
    if (!user) throw { statusCode: 404, message: "Usuario no encontrado" };

    return res.json({ message: "Usuario eliminado exitosamente" });
  } catch (error) {
    console.log(error);
  }
};
