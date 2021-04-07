import { validationResult } from "express-validator";

let postRegister = async (req, res) => {
  let errorArr = [];

  let validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    let errors = Object.values(validationErrors.mapped());
    errors.forEach((item) => {
      errorArr.push(item.msg);
    });
    console.log(errorArr);
    return;
  }
  console.log(req.body);
};

module.exports = {
  postRegister: postRegister,
};
