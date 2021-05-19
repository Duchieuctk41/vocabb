import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import { authLoginUrl, checkLoggedOut } from "../../api";
import style from "./signin.module.scss";
import { facebook, google } from "./../../img";

const SignIn = () => {
  const history = useHistory();
  
  checkLogout();

  function checkLogout(){
    axios({
      method: "GET",
      withCredentials: true,
      url: checkLoggedOut(),
    })
      .then((response) => {
        console.log(response);

        if (response.data.success) {
          history.push("/");
        }
      })
      .catch((error) => console.log(error));
  }

  const [flash, setFlash] = useState();
  const [signin, setSignin] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setSignin({ ...signin, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      data: signin,
      withCredentials: true,
      url: authLoginUrl(),
    })
      .then((response) => {
        // console.log(response.data.errors);
        // console.log("success", response.data.success);
        response.data.errors
          ? setFlash(response.data.errors)
          : setFlash(response.data.success);
        if (response.data.success) {
          history.push(`/`);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={style.main}>
      <h1 className={style.title__login}>{flash ? flash : "Đăng nhập"}</h1>
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
              type="password"
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
