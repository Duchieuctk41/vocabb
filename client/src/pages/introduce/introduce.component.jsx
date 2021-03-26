import React from "react";
import { Link } from "react-router-dom";
import { astronaut } from "../../img";

const Introduce = () => {
  return (
    <div className="header">
      <h2 name="game">vocab</h2>
      <li>
        <a href="#" name="languages">
          NGÔN NGỮ HIỂN THỊ : TIẾNG VIỆT
          <img src="../img/arrow.png" alt="arrow" name="arrow"></img>
        </a>
      </li>
      <div class="top">
        <div class="top__content">
          <div class="circle1">
            <div class="circle2">
              <div class="circle3"></div>
            </div>
          </div>
          <div class="topright">
            <h1 name="tor">Học ngoại ngữ khi chơi game</h1>
            <table>
              <tr>
                <td>
                  <a href="regiter" name="signup">
                    Bắt đầu
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a name="signin">Tôi đã có tài khoản</a>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="center">
        <div class="incen">
          <img src="../img/left.png" alt="left" name="left"></img>
          <div class="in">
            <img src="../img/usa.png" alt="usa" name="usa"></img>
            <Link href="#" name="usa">
              Tiếng Anh
            </Link>
            <img src="../img/china.png" alt="china" name="china"></img>
            <Link href="#" name="china">
              Tiếng Hoa
            </Link>
          </div>
          <img src="../img/right.png" alt="right" name="right"></img>
        </div>
      </div>
      <div class="botton"></div>
    </div>
  );
};

export default Introduce;
