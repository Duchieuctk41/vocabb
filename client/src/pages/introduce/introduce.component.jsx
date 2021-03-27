import React from "react";
import { Link } from "react-router-dom";
import { astronaut } from "../../img";
import "./introduce.module.scss";

// redux
import { useSelector } from "react-redux";

const Introduce = () => {
  const { dataGame } = useSelector((state) => state);
  return (
    <div className="header">
      <h2 name="game">vocab</h2>
      <li>
        <Link to="/" name="languages">
          NGÔN NGỮ HIỂN THỊ : TIẾNG VIỆT
          <img src={astronaut} alt="arrow" name="arrow"></img>
        </Link>
      </li>
      <div className="top">
        <div className="top__content">
          <div className="circle1">
            <div className="circle2">
              <div className="circle3"></div>
            </div>
          </div>
          <div className="topright">
            <h1 name="tor">Học ngoại ngữ khi chơi game</h1>
            <table>
              <tr>
                <td>
                  <Link href="regiter" name="signup">
                    Bắt đầu
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link name="signin">Tôi đã có tài khoản</Link>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="incen">
          <img src={astronaut} alt="left" name="left"></img>
          <div className="in">
            <img src={astronaut} alt="usa" name="usa"></img>
            <Link to="/" name="usa">
              Tiếng Anh
            </Link>
            <img src="../img/china.png" alt="china" name="china"></img>
            <Link to="/" name="china">
              Tiếng Hoa
            </Link>
          </div>
          <img src={astronaut} alt="right" name="right"></img>
        </div>
      </div>
      <div className="botton"></div>
    </div>
  );
};

export default Introduce;
