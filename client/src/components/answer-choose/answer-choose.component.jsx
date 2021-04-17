import React, { useState } from "react";
import style from "./answer-choose.module.scss";
import { close, rice } from "./../../img";

const AnswerChoose = ({ item, stt, isActive, actived }) => {
  // console.log(item);
  let onClickHandler = actived;
  return (
    <div className={style.answer}>
      <div
        className={`${style.answer__item} ${
          isActive === stt ? style.active : ""
        }`}
        onClick={() => onClickHandler(stt)}
        key={stt}
      >
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