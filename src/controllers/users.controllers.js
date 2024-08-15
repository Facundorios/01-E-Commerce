import { default as UserService } from "../services/user.services.js";

export const get = async (req, res) => {
  try {
    let users = await UserService.find();
    users = users.map((user) => {
      return {
        name: user.name,
        surname: user.surname,
        email: user.email,
        role: user.role,
      };
    });
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
    return res.json(user);
  } catch (error) {
    return { error: error };
  }
};

export const login = async (req, res) => {
  try {
    const user = await UserService.login(req.body);
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
