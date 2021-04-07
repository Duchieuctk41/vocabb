import React from "react";
import { Link } from "react-router-dom";
import { arrow_down, arrow_left, arrow_right } from "../../img";
import style from "./introduce.module.scss";

const Introduce = () => {
  // const { dataGame } = useSelector((state) => state);
  return (
    <div>
      <div className={style.header}>
        <div className={style.container}>
          <h2 className={style.logo}>vocab</h2>
          <ul>
            <li className={style.languages}>
              NGÔN NGỮ HIỂN THỊ : TIẾNG VIỆT
              <img src={arrow_down} alt="arrow"></img>
            </li>
          </ul>
        </div>
      </div>

      <div className={style.top}>
        <div className={style.top__content}>
          <div className={style.circle1}>
            <div className={style.circle2}>
              <div className={style.circle3}></div>
            </div>
          </div>
          <div className={style.topright}>
            <h1 className={style.tor}>Học ngoại ngữ miễn phí. Mãi mãi</h1>
            <div>
              <Link to="/login" className={style.signup}>
                Bắt đầu
              </Link>
            </div>
            <div>
              <Link to="/login" className={style.signin}>
                Tôi đã có tài khoản
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={style.footer}>
        <div className={style.container}>
          <img src={arrow_left} alt="left" className={style.img__left}></img>
          <ul className={style.in}>
            <li>
              <span className={style.america}></span>
              <Link to="/" className={style.link__usa}>
                Tiếng Anh
              </Link>
            </li>
            <li>
              <span className={style.china}></span>
              <Link to="/" className={style.link__china}>
                Tiếng Hoa
              </Link>
            </li>
          </ul>
          <img src={arrow_right} alt="right" className={style.img__right}></img>
        </div>
      </div>
      <div className={style.botton}></div>
    </div>
  );
};

export default Introduce;
