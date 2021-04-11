import React from "react";
import { Link } from "react-router-dom";

import LoginLink from "./../../components/login-link/login-link.component";
import SignUp from "../../components/signup/signup.component";
import SignIn from "../../components/signin/signin.component";


import style from "./signup-login.module.scss";

const SignupLogin = () => (
  <div className={style.content}>
    <LoginLink />
    {/* <SignUp /> */}
    <SignIn />
  </div>
);

export default SignupLogin;
