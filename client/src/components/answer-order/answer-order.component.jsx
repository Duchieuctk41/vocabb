import React, { useEffect, useState } from "react";
import style from "./answer-order.module.scss";

const AnswerOrder = ({ item, actived }) => {
  const [arrayAnswer, setArrayAnswer] = useState([]);  //danh sách được chọn

  //chọn đáp án, chạy lên trên
  function onClickAddAnswer(item) {
    setArrayAnswer((arrayAnswer) => [...arrayAnswer, item], [arrayAnswer]);
    
  }
  
  function onClickRemoveAnswer(item) {
    const newList = arrayAnswer.filter((element) => element !== item)
    setArrayAnswer(newList);
  }

  let onClickHandler = actived;
  useEffect(() => {
    onClickHandler(arrayAnswer);
  },[onClickHandler, arrayAnswer]);
  
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
          {arrayAnswer && arrayAnswer.map((e) => <button key={e} onClick={() => {onClickRemoveAnswer(e);
          if(arrayAnswer.length === 1) onClickHandler(0);} 
          }>{e}</button>)}
        </div>
        <div>
          {item.Answer &&
            item.Answer.map((element) => (
              <button
                key={element.title}
                onClick={() => {
                  onClickAddAnswer(element.title);
                }}
                disabled={arrayAnswer.find(item => item === element.title) ? true : false}
              >
                {element.title}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AnswerOrder;
