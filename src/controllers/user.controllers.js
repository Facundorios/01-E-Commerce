import { default as UserService } from "../services/user.services.js";

export const register = async (req, res) => {
  try {
    const user = await UserService.register(req.body);
    res.status(201).json(user);
  } catch (error) {
    return { error: error };
  }
};

export const login = async (req, res) => {
  try {
    const user = await UserService.login(req.body);
    if (!user) res.json({ message: "Usuario no encontrado." });

    res.status(200).json(user);
  } catch (error) {
    return { error: error };
  }
};
