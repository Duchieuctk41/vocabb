import React from "react";
import { connect } from "react-redux";

import { close } from "./../../img";
import style from "./login-link.module.scss";

import { useSelector } from "react-redux";
import { loginActions } from "./../../redux/actions/loginActions";
const LoginLink = ({ loginActions }) => {
  const { login } = useSelector((state) => state.login);
  return (
    <div>
      <div>
        <img src={close} alt="cross" className={style.cross}></img>
      </div>
      <div className={style.signup} onClick={loginActions}>
        {login ? "Đăng Ký" : "Đăng Nhập"}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loginActions: () => dispatch(loginActions()),
});

export default connect(null, mapDispatchToProps)(LoginLink);
