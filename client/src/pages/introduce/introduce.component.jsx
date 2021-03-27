import React from "react";
import { Link } from "react-router-dom";
import {
  astronaut,
  america,
  china,
  arrow_down,
  arrow_left,
  arrow_right,
  earth,
} from "../../img";
import style from "./introduce.module.scss";

// redux
import { useSelector } from "react-redux";

const Introduce = () => {
  const { dataGame } = useSelector((state) => state);
  return (
    <div>
      <div className={style.header}>
        <h2 className={style.logo}>vocab</h2>
        <ul>
          <li className={style.languages}>
            NGÔN NGỮ HIỂN THỊ : TIẾNG VIỆT
            <img src={arrow_down} alt="arrow"></img>
          </li>
        </ul>
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
            <table>
              <tr>
                <td>
                  <Link href="regiter" className={style.signup}>
                    Bắt đầu
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link className={style.signin}>Tôi đã có tài khoản</Link>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className={style.center}>
        <div className={style.incen}>
          <img src={arrow_left} alt="left" className={style.img__left}></img>
          <div className={style.in}>
            <span alt="usa" className={style.img__usa}></span>

            <Link to="/" className={style.link__usa}>
              Tiếng Anh
            </Link>
            <img src={china} alt="china" className={style.img__china}></img>
            <Link to="/" className={style.link__china}>
              Tiếng Hoa
            </Link>
          </div>
          <img src={arrow_right} alt="right" className={style.img__right}></img>
        </div>
      </div>
      <div className={style.botton}></div>
    </div>
  );
};

export default Introduce;
