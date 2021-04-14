import React from "react";
import {   useSelector } from "react-redux";

import LoginLink from "../../components/login-link/login-link.component";
import SignUp from "../../components/signup/signup.component";
import SignIn from "../../components/signin/signin.component";

import style from "./login.module.scss";

const SignupLogin = () => {
  const { login } = useSelector((state) => state.login);

  return (
    <div className={style.content}>
      <LoginLink />
      {login ? <SignIn /> : <SignUp />}
    </div>
  );
};

export default SignupLogin;
