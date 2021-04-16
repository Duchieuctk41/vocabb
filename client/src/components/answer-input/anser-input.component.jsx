import React from "react";
import style from "./answer-input.module.scss";
import { astronaut } from "./../../img";

const AnswerInput = ({ item }) => {
  console.log(item.question);
  return (
    <div className={style.content}>
      <div className={style.image}>
        <img alt="img" src={astronaut}></img>
        <div className={style.image__sentense}>
          <span>Thank you, bye</span>
        </div>
      </div>
      <textarea placeholder={item.question}></textarea>
    </div>
  );
};

export default AnswerInput;
