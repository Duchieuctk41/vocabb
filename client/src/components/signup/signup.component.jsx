import React from "react";
import { Link } from "react-router-dom";

import { facebook, google } from "../../img";

import style from "./signup.module.scss";

const SignUp = () => (
  <div>
    <div className={style.main}>
      <h1 className={style.login}>Tạo hồ sơ</h1>
      <div className={style.inp}>
        <div className={style.inp1}>
          <input type="text" placeholder="Tuổi"></input>
        </div>
        <div className={style.inp1}>
          <input type="text" placeholder="Tên"></input>
        </div>
        <div className={style.inp1}>
          <input type="text" placeholder="Email hoặc tên đăng nhập"></input>
        </div>
        <div className={style.inp1}>
          <input type="text" placeholder="Mật khẩu"></input>
        </div>
      </div>
      <Link to="/" name="signin">
        Tạo tài khoản
      </Link>
      <div className={style.hr}>
        <hr />
        <div className={style.or}>Hoặc</div>
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
          Khi đăng ký tài khoản trên VOCAB là bạn đã đồng ý với các
          <Link to="/"> điều khoản và chính sách bảo mật </Link>
          của chúng tôi.
        </p>
      </div>
    </div>
  </div>
);

export default SignUp;