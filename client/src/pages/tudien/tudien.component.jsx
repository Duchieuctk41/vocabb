import React from "react";
import { Link } from "react-router-dom";

import { usvi, cnvi, down, babyboy } 
from "../../img";

import style from "./tudien.module.scss";

const Tudien = () => {
  return (
    <div className={style.main}>
      <div className={style.header}></div>
      <div className={style.content}>
        <div className={style.center}>
          <h1>Dịch Tiếng Anh - Tiếng Việt</h1>
          <h2>Xem giải nghĩa từ, ví dụ câu và nhiều điều khác.</h2>
          <div className={style.translate}>
          
            <Link className={style.img} to="#">
              <img src={usvi} alt="anh viet" name="language"></img>
              <img src={down} alt="down" name="down"></img>
            </Link>
            <input type="text" placeholder="Nhập tiếng Anh hoặc tiếng Việt" />
            <Link name="translate" to="#">
              Dịch nghĩa
            </Link>
          </div>
        </div>
      </div>
      <div className={style.botton}>
        <ul className="menu">
          <li>
            <Link className="item" to="#">
              Giới thiệu
            </Link>
            <Link className="item" to="#">
              Học đường
            </Link>
            <Link className="item" to="#">
              Ứng dụng
            </Link>
            <Link className="item" to="#">
              Trợ giúp
            </Link>
            <Link className="item" to="#">
              Nội quy
            </Link>
            <Link className="item" to="#">
              Công việc
            </Link>
            <Link className="item" to="#">
              Điều khoản
            </Link>
            <Link className="item" to="#">
              Quyền riêng tư
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tudien;
