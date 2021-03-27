import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { close, cold, ramen, rice } from "../../img";

// redux
import { useDispatch, useSelector } from "react-redux";
import { vocabActions } from "../../redux/actions/vocabActions";

import style from "./game.module.scss";

const Game = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <img src={close}></img>
        <div className={style.process}></div>
      </div>
      <div className={style.content}>
        <div className={style.grid}>
          <h1>
            <span>Đâu là "nóng"?</span>
          </h1>
          <div className={style.answer}>
            {/* item */}
            <div className={style.answer__item}>
              <div className={style["answer__item-img"]}>
                <img src={cold}></img>
              </div>
              <div className={style["answer__item-sub"]}>
                <span>noodles</span>
                <span>1</span>
              </div>
            </div>
            <div className={style.answer__item}>
              <div className={style["answer__item-img"]}>
                <img src={rice}></img>
              </div>
              <div className={style["answer__item-sub"]}>
                <span>noodles</span>
                <span>1</span>
              </div>
            </div>
            <div className={style.answer__item}>
              <div className={style["answer__item-img"]}>
                <img src={ramen}></img>
              </div>
              <div className={style["answer__item-sub"]}>
                <span>noodles</span>
                <span>1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.footer}>
        <div className={style.footer__container}>
          <Link to="/">Bỏ qua</Link>
          <Link to="/">Kiểm tra</Link>
        </div>
      </div>
    </div>
  );
};

export default Game;
