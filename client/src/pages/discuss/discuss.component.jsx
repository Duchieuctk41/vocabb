import React from "react";
import { Link } from "react-router-dom";

import style from "./discuss.module.scss";
import { america, babyboy, loupe } from "../../img";

const Game = () => {
  return (
    <div className={style["container-fluid"]}>
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.left__title}>
            <h1>Diễn Đàn Ngôn Ngữ Vocab</h1>
            <span className={style.left__post}>
              <Link to="#">BÀI ĐĂNG MỚI</Link>
            </span>
          </div>
          <ul className={style.left__category}>
            <li>
              <h2>
                <Link to="/#" className={style["--active"]}>
                  ĐANG ĐƯỢC ƯA THÍCH
                </Link>
              </h2>
            </li>
            <li>
              <h2>
                <Link to="/#">MỚI</Link>
              </h2>
            </li>
            <li>
              <h2>
                <Link to="/#">ĐÃ THEO DÕI</Link>
              </h2>
            </li>
          </ul>
          <div className={style.left__discuss}>
            <span className={style.avatar}>
              <span className={style.border}></span>
              <img src={babyboy} alt="" />
            </span>
            <div className={style.info}>
              <div className={style.info__top}>
                <h3>ok</h3>
                <div className={style["info__top-right"]}>
                  <span className="ti-comment"></span>
                  <span>0</span>
                </div>
              </div>
              <div className={style.info__bottom}>
                <span className={style.like}>
                  <span>4</span>
                  <span className="ti-angle-up"></span>
                  <span className="ti-angle-down"></span>
                </span>
                <span className={style.time}>6 tiếng trước từ</span>
                <span className={style.user}>mai_hoang_yen</span>
              </div>
            </div>
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
            <h2>
              Đang theo dõi:<Link>Sửa đổi</Link>
            </h2>

            <ul>
              <li>
                <div className={style.note__follow}>
                  <img src={america} alt="" />
                  <h3>Hieu hoc</h3>
                  <h4>bằng Tiếng Việt</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
