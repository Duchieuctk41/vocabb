import { validationResult } from "express-validator";
import { authSer } from "./../services/index";

let postRegister = async (req, res) => {
  let errorArr = [];
  let successArr = [];

  let validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    let errors = Object.values(validationErrors.mapped());
    errors.forEach((item) => {
      errorArr.push(item.msg);
    });
    req.flash("errors", errorArr);
    return res.send({ errors: errorArr });
  }
  try {
    let createUserSuccess = await authSer.register(
      req.body.age,
      req.body.name,
      req.body.email,
      req.body.password
    );
    successArr.push(createUserSuccess);
    req.flash("success", successArr);
    return res.send({ success: successArr });
  } catch (error) {
    errorArr.push(error);
    req.flash("errors", errorArr);
    return res.send({ errors: errorArr });
  }
};

module.exports = {
  postRegister: postRegister,
};
