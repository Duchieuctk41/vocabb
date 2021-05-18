import { validationResult } from "express-validator";
import { authSer } from "./../services/index";
import passport from "passport";

// Kiểm tra đăng ký
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
      req.body.password,
      req.protocol,
      req.get("host")
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

// Kiểm tra đăng nhập
let postLogin = async (req, res, next) => {
  let errorArr = [];
  let successArr = [];

  passport.authenticate("local", (err, user, info) => {
    if (info.success) {
      successArr.push(info.success);
      req.flash("success", successArr);
      return res.send({ success: successArr });
    } else {
      errorArr.push(info.errors);
      req.flash("errors", errorArr);
      return res.send({ errors: errorArr });
    }
  })(req, res, next);
};

// Kiểm tra có vào hàm Flash ko
let success = ["1"];
let getFlash = (req, res) => {
  console.log("vao day roiw");

  success.push("1");
  return res.send(success);
};

// Kiểm tra verify account
let verifyAccount = async (req, res) => {
  let errorArr = [];
  let successArr = [];
  try {
    let verifySuccess = await authSer.verifyAccount(req.params.token);
    successArr.push(verifySuccess);
    successFlash.push(verifySuccess);
    req.flash("success", successArr);
    // console.log("vao day roi1");
    return res.redirect("/home");
  } catch (error) {
    errorArr.push(error);
    req.flash("errors", errorArr);
    return res.redirect("/home");
  }
};

module.exports = {
  postRegister: postRegister,
  verifyAccount: verifyAccount,
  postLogin: postLogin,
  getFlash: getFlash,
};
