import { body, param } from "express-validator";

export const createSchema = [
  body("name")
    .exists()
    .withMessage("El nombre es requerido.")
    .isString()
    .isLength({ min: 5 })
    .withMessage("El nombre debe tener más de 3 caracteres."),
  body("price")
    .exists()
    .withMessage("El precio es requerido.")
    .isNumeric()
    .isFloat()
    .withMessage("El precio debe ser un número positivo."),
  body("description")
    .exists()
    .withMessage("La descripción es obligatoria")
    .isString()
    .isLength({ min: 15 })
    .withMessage("La descripción debe tener más de 10 caracteres."),
  body("category")
    .exists()
    .withMessage("La categoria es requerida.")
    .isString()
    .isLength({ min: 3 })
    .withMessage("La categoria debe contar con al menos 3 caracteres"),
  body("stock")
    .exists()
    .withMessage("El stock es requerido.")
    .isNumeric()
    .isFloat()
    .withMessage("El precio debe ser un número positivo."),
];

export const removeSchema = [
  param("id")
    .exists()
    .withMessage("El id es requerido.")
    .isMongoId()
    .withMessage("El id no es válido."),
];
