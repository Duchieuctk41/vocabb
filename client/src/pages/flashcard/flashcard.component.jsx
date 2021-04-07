import React from "react";
import { Link } from "react-router-dom";

import style from "./flashcard.module.scss";
import { loupe, america, image, add, clear } from "../../img";

const Store = () => {
  return (
    <div className={style["container-fluid"]}>
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.left__title}>
            <h1>Bộ thẻ: Gia đình</h1>
            <span className={style.left__post}>
              <Link>Xem tất cả thẻ</Link>
            </span>
          </div>
          <div className={style.flashcard}>
            <div className={style.left__tool}>
              <span>
                <img src={clear} alt="img" />
                Clear
              </span>
              <span>
                <img src={add} alt="img" />
                Thêm
              </span>
            </div>
            <div className={style.left__store}>
              <div className={style["left__store-left"]}>
                <input type="text" placeholder="Thêm mặt trước" />
              </div>
              <div className={style["left__store-right"]}>
                <input type="text" placeholder="Thêm mặt sau" />
              </div>
              <div className={style["left__store-img"]}>
                <img src={image} alt="img"></img>
                <span>Hình ảnh</span>
              </div>
            </div>
          </div>
          <div className={style.left__added}>
            <h2>Từ vựng đã thêm</h2>
            <span>1 từ</span>
            <table className={style.table}>
              <thead>
                <tr>
                  <th>Mặt trước</th>
                  <th>Mặt sau</th>
                  <th>Hình ảnh</th>
                </tr>
              </thead>
              <tbody>
                <tr className={style.tr}>
                  <td>sugar daddy</td>
                  <td>bố đường</td>
                  <td>hình ảnh</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.search}>
            <div>
              <img src={loupe} alt="img" />
            </div>
            <input type="text" placeholder="Tìm kiếm" />
          </div>

          <div className={style.note}>
            <h2>Bộ thẻ gần đây:</h2>
            <ul>
              <li>
                <div className={style.note__follow}>
                  <img src={america} alt="img" />
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
