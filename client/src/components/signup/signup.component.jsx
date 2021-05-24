import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { postSignupUrl } from "../../api";
import { facebook, google, question } from "../../img";
import style from "./signup.module.scss";

const SignUp = () => {

  const [flash, setFlash] = useState();
  const [signup, setSignup] = useState({
    age: "",
    name: "",
    email: "",
    password: "",
  });
  const { age, name, email, password } = signup;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(postSignupUrl(), signup)
      .then((response) => {
        // console.log(response.data.errors);
        // console.log("success", response.data.success);
        response.data.errors
          ? setFlash(response.data.errors)
          : setFlash(response.data.success);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={style.container}>
      <div className={style.main}>
        <h1 className={style.login}>{flash ? flash : "Tạo hồ sơ"}</h1>
        <form onSubmit={submitHandler}>
          <div className={style.inp}>
            <div className={style.inp1}>
              <img src={question} alt="question" className={style.question} />
              <input
                type="text"
                name="age"
                required
                placeholder="Tuổi"
                value={age}
                onChange={changeHandler}
              ></input>
            </div>
            <div className={style.inp1}>
              <input
                type="text"
                name="name"
                required
                placeholder="Tên"
                value={name}
                onChange={changeHandler}
              ></input>
            </div>
            <div className={style.inp1}>
              <input
                type="text"
                name="email"
                required
                placeholder="Email hoặc tên đăng nhập"
                value={email}
                onChange={changeHandler}
              ></input>
            </div>
            <div className={style.inp1}>
              <input
                type="password"
                name="password"
                required
                placeholder="Mật khẩu"
                value={password}
                onChange={changeHandler}
              ></input>
            </div>
          </div>
          <input
            type="submit"
            className={style.signin}
            value="Tạo tài khoản"
          ></input>
        </form>
        <div className={style.hr}>
          <div className={style.hr__line}></div>
          <div
            className={style.hr__or}
            onClick={() => console.log("signup:: ", signup)}
          >
            Hoặc
          </div>
          <div className={style.hr__line}></div>
        </div>
        <div className={style.inp5}>
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
    </div>
  );
};

export default SignUp;
