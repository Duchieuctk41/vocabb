import React, { useState } from "react";
import style from "./answer-order.module.scss";

const AnswerOrder = ({ item }) => {
  const [arrayAnswer, setArrayAnswer] = useState([]);
  const [test, setTest] = useState(["hei", "jdjk", "fdjkals"]);
  function onClickHandler(item) {
    setArrayAnswer((arrayAnswer) => [...arrayAnswer, item], [arrayAnswer]);
  }
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
          {arrayAnswer && arrayAnswer.map((e) => <span key={e}>{e}</span>)}
        </div>
        <div>
          {item.Answer &&
            item.Answer.map((element) => (
              <span
                key={element.title}
                onClick={() => {
                  onClickHandler(element.title);
                }}
              >
                {element.title}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AnswerOrder;
