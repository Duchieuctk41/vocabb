import React, { useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

import { authLogoUrl } from "../../api";

import style from "./signin.module.scss";
import { facebook, google } from "./../../img";

const SignIn = () => {
  const [signup, setSignup] = useState({
    email: "",
    password: "",
  });

  const { email, password } = signup;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(authLogoUrl(), signup)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={style.main}>
      <h1 className={style.title__login}>Đăng nhập</h1>
      <form onSubmit={submitHandler}>
        <div className={style.inp}>
          <div className={style.inp1}>
            <input
              type="text"
              placeholder="Email hoặc tên đăng nhập"
              name="email"
              required
              onChange={changeHandler}
            ></input>
          </div>
          <div className={style.inp1}>
            <Link to="/" className={style.forget}>
              Quên?
            </Link>
            <input
              type="text"
              placeholder="Mật khẩu"
              name="password"
              required
              onChange={changeHandler}
            ></input>
          </div>
        </div>
        <input type="submit" value="Đăng nhập" className={style.signin}></input>
      </form>
      <div className={style.hr}>
        <div className={style.hr__line}></div>
        <div className={style.hr__or}>Hoặc</div>
        <div className={style.hr__line}></div>
      </div>
      <div className={style.inp3}>
        <Link to="/" className={style.fb}>
          <img src={facebook} alt="Facebook" name="fb"></img>
          FaceBook
        </Link>
        <Link to="/" className={style.gg}>
          <img src={google} alt="Google" name="gg"></img>
          Google
        </Link>
      </div>
      <div className={style.botton}>
        <p className={style.rule}>
          Khi đăng ký trên Vocab, bạn đã đồng ý với{" "}
          <Link to="/">Các chính sách</Link> và{" "}
          <Link to="/">Chính sách bảo mật</Link> của chúng tôi.
        </p>
      </div>
    </div>
  );
};

export default SignIn;
