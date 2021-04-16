import React from "react";
import style from "./answer-order.module.scss";

const AnswerOrder = ({ item }) => {
  return (
    <div className={style.content}>
      <div className={style.image}>
        <img alt="img" src={item.illustration}></img>
        <div className={style.image__sentense}>
          <span>{item.sentense}</span>
        </div>
      </div>
      <div className={style.answer}>
        <div className={style["--choosed"]}>
          <span>Hello</span>
        </div>
        <div>
          {item.Answer &&
            item.Answer.map((element) => (
              <span key={element.title}>{element.title}</span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AnswerOrder;
