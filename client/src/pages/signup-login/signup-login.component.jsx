import React from "react";
import { Link } from "react-router-dom";

import SignUp from "../../components/signup/signup.component";
import SignIn from "../../components/signin/signin.component";

import { close } from "../../img";

import style from "./signup-login.module.scss";

const SignupLogin = () => (
  <div className={style.content}>
    <Link to="/">
      <img src={close} alt="cross" className={style.cross}></img>
    </Link>
    <Link to="/" className={style.signup}>
      Đăng Ký
    </Link>
    {/* <SignUp /> */}
    <SignIn />
  </div>
);

export default SignupLogin;
