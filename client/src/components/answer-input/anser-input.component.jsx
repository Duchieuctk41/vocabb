import React, { useEffect, useState } from "react";
import style from "./answer-input.module.scss";

const AnswerInput = ({ item, actived }) => {
  // console.log(item.question);

  const [userInput, setUserInput] = useState("");
  const changeHandler = e => {
    const {value} = e.target;
    setUserInput(value);
  }

  let onClickHandlerInput = actived;
  
  useEffect(() => {
    onClickHandlerInput(userInput);
  },[onClickHandlerInput, userInput]);

  
  return (
    <div className={style.content}>
      <div className={style.image}>
        <img alt="img" src={item.illustration}></img>
        <div className={style.image__sentense}>
          <span>{item.sentense}</span>
        </div>
      </div>
      <textarea placeholder={item.question} onChange={changeHandler}></textarea>
    </div>
  );
};

export default AnswerInput;
