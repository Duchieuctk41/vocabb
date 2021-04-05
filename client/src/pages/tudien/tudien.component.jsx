import React, { useState } from "react";
import { Link } from "react-router-dom";

import { usvi, cnvi, down, babyboy } from "../../img";

import style from "./tudien.module.scss";

const Tudien = () => {
  const [bg, setBg] = useState(false);
  return (
    <div className={style.main}>
      <div className={style.content}>
        <div className={style.center}>
          <h1>Dịch Tiếng Anh-Tiếng Việt</h1>
          <h2>Xem giải nghĩa từ, ví dụ câu và nhiều điều khác.</h2>
          <div
            className={style.translate}
            style={bg ? { background: "#fff" } : { background: "#f7f7f7" }}
          >
            <Link className={style.img} to="#">
              <img src={usvi} alt="anh viet" name="language"></img>
              <img src={down} alt="down" name="down"></img>
            </Link>
            <input
              onFocus={() => {
                setBg(true);
              }}
              onBlur={() => {
                setBg(false);
              }}
              type="text"
              placeholder="Nhập bằng Tiếng Anh hoặc Tiếng Việt"
            />
            <Link name="translate" to="#">
              Dịch nghĩa
            </Link>
          </div>
        </div>
      </div>
      <div className={style.botton}>
        <hr className={style.hr}/>
        <ul className="menu">
          <li>
            <Link className="item" to="#">
              Giới thiệu
            </Link>
          </li>
          <li>
            <Link className="item" to="#">
              Học đường
            </Link>
          </li>
          <li>
            <Link className="item" to="#">
              Ứng dụng
            </Link>
          </li>
          <li>
            <Link className="item" to="#">
              Trợ giúp
            </Link>
          </li>
          <li>
            <Link className="item" to="#">
              Nội quy
            </Link>
          </li>
          <li>
            <Link className="item" to="#">
              Công việc
            </Link>
          </li>
          <li>
            <Link className="item" to="#">
              Điều khoản
            </Link>
          </li>
          <li>
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
