import { validationResult } from "express-validator";

let getLoginRegister = (req, res) => {
  console.log("dau cat moi", req);
  // return res.send({ errors: req.flash("errors") });
};

let postRegister = async (req, res) => {
  let errorArr = [];

  let validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    let errors = Object.values(validationErrors.mapped());
    errors.forEach((item) => {
      errorArr.push(item.msg);
    });

    return res.send({ errors: errorArr});
  }
  console.log(req.body);
};

module.exports = {
  getLoginRegister: getLoginRegister,
  postRegister: postRegister,
};
