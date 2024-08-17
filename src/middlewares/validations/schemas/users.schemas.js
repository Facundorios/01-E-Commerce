import { checkSchema, param } from "express-validator";

export const createSchema = checkSchema({
  email: {
    in: ["body"],
    exists: {
      errorMessage: "El email es obligatorio.",
    },
    isEmail: {
      errorMessage: "El email no es válido.",
    },
  },
  password: {
    in: ["body"],
    exists: {
      errorMessage: "Necesitas crear una contraseña.",
    },
    isString: true,
    isLength: {
      options: { min: 6 },
      errorMessage: "La contraseña debe tener al menos 6 caracteres.",
    },
  },
  role: {
    in: ["body"],
    exists: {
      errorMessage: "El rol es requerido.",
    },
    isIn: {
      options: [["client", "seller"]],
      errorMessage: "El rol debe ser client o seller.",
    },
  },
});

export const removeSchema = [
  param("id")
    .exists()
    .withMessage("El id es requerido.")
    .isMongoId()
    .withMessage("El id no es válido."),
];

export const authSchema = checkSchema({
  email: {
    in: ["body"],
    exists: {
      errorMessage: "Ingrese el email.",
    },
    isEmail: {
      errorMessage: "El email no es válido.",
    },
  },
  password: {
    in: ["body"],
    exists: {
      errorMessage: "Ingrese la contraseña.",
    },
  },
});
