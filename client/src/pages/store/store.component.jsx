import React from "react";
import { Link } from "react-router-dom";

import style from "./store.module.scss";
import { loupe, babyboy, america } from "../../img";

const Store = () => {
  return (
    <div className={style["container-fluid"]}>
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.left__title}>
            <h1>Bộ thẻ từ vựng</h1>
            <span className={style.left__post}>
              <Link>Tạo bộ thẻ mới</Link>
            </span>
          </div>
          <div className={style.left__store}>
            <div className={style["left__store-left"]}>
              <span className={style.avatar}>
                <img src={babyboy} alt="" />
              </span>
              <h3>Gia đình</h3>
              <h4>50 từ</h4>
            </div>
            <span className={style["left__store-right"]}>
              <Link>Thêm từ vựng</Link>
            </span>
          </div>
          {/* nhan doi */}
          <div className={style.left__store}>
            <div className={style["left__store-left"]}>
              <span className={style.avatar}>
                <img src={babyboy} alt="" />
              </span>
              <h3>Gia đình</h3>
              <h4>50 từ</h4>
            </div>
            <span className={style["left__store-right"]}>
              <Link>Thêm từ vựng</Link>
            </span>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.search}>
            <div>
              <img src={loupe} alt="" />
            </div>
            <input type="text" placeholder="Tìm kiếm" />
          </div>

          <div className={style.note}>
            <h2>Bộ thẻ gần đây:</h2>

            <ul>
              <li>
                <div className={style.note__follow}>
                  <img src={america} alt="" />
                  <h3>Gia đình</h3>
                  <h4>đã học 40 từ</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
