import React from "react";
import style from "./answer-choose.module.scss";
import { close, rice } from "./../../img";

const AnswerChoose = ({ item, stt }) => {
  console.log(item);
  return (
    <div className={style.answer}>
      <div className={style.answer__item}>
        <div className={style["answer__item-img"]}>
          <img src={item.img} alt="img"></img>
        </div>
        <div className={style["answer__item-sub"]}>
          <span>{item.title}</span>
          <span>{stt}</span>
        </div>
      </div>
    </div>
  );
};

export default AnswerChoose;
