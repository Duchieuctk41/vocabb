import React from "react";
import { Link } from "react-router-dom";

import { close } from "./../../img";

import style from "./login-link.module.scss";
const LoginLink = () => {
  return (
    <div>
      <Link to="/">
        <img src={close} alt="cross" className={style.cross}></img>
      </Link>
      <Link to="/" className={style.signup}>
        Đăng Ký
      </Link>
    </div>
  );
};

export default LoginLink;
