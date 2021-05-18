import { check } from "express-validator";
import { transValidation } from "./../../lang/vi";

let register = [
  check("name", transValidation.name_incorrect),
  check("email", transValidation.email_incorrect).isEmail().trim(),
  check("age", transValidation.age_incorrect).isNumeric(),
  check("password", transValidation.password_incorrect)
    .isLength({ min: 8 })
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/),
];

let login = [
  check("email", transValidation.email_incorrect).isEmail().trim(),
  check("password", transValidation.password_incorrect)
    .isLength({ min: 8 })
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/),
];

module.exports = {
  register: register,
  login: login
};
