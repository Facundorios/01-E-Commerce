import { body } from "express-validator";

export const createSchema = [
  body("name")
    .isString()
    .isLength({ min: 5 })
    .withMessage("El nombre debe tener más de 3 caracteres."),
  body("price")
    .isNumeric()
    .isFloat()
    .withMessage("El precio debe ser un número positivo."),
  body("description")
    .isString()
    .isLength({ min: 15 })
    .withMessage("La descripción debe tener más de 10 caracteres."),
  body("category")
    .isString()
    .isLength({ min: 3 })
    .withMessage("La categoria debe contar con al menos 3 caracteres"),
  body("stock")
    .isNumeric()
    .isFloat()
    .withMessage("El precio debe ser un número positivo."),
];
