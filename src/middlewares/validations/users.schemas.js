import { body, param } from "express-validator";

export const createSchema = [
  body("name")
    .exists()
    .withMessage("El nombre es requerido.")
    .isString()
    .isLength({ min: 3 })
    .withMessage("El nombre debe tener más de 3 caracteres."),
  body("surname")
    .exists()
    .withMessage("El nombre es requerido.")
    .isString()
    .isLength({ min: 3 })
    .withMessage("El nombre debe tener más de 3 caracteres."),
  body("email")
    .exists()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("El email no es válido"),
];

export const removeSchema = [
  param("id")
    .exists()
    .withMessage("El id es requerido.")
    .isMongoId()
    .withMessage("El id no es válido."),
];
