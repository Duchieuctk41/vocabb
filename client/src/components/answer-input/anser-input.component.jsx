import React from "react";
import style from "./answer-input.module.scss";

const AnswerInput = ({ item }) => {
  // console.log(item.question);
  return (
    <div className={style.content}>
      <div className={style.image}>
        <img alt="img" src={item.illustration}></img>
        <div className={style.image__sentense}>
          <span>{item.sentense}</span>
        </div>
      </div>
      <textarea placeholder={item.question}></textarea>
    </div>
  );
};

export default AnswerInput;
