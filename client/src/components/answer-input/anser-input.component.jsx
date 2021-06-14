import React, { useEffect, useState } from "react";
import style from "./answer-input.module.scss";
import { addUserInput } from "./../../redux/actions/userChooseActions";
import { useSelector, connect } from "react-redux";

const AnswerInput = ({ item, actived, addItem }) => {
  const { userChoose }  = useSelector(state => state.userChoose);

  const changeHandler = e => {
    const { value } = e.target;
    addItem({ userChoose: value });
  }

  let onClickHandlerInput = actived;

  useEffect(() => {
    onClickHandlerInput(userChoose);
  }, [onClickHandlerInput, userChoose]);


  return (
    <div className={style.content}>
      <div className={style.image}>
        <img alt="img" src={item.illustration}></img>
        <div className={style.image__sentense}>
          <span>{item.sentence}</span>
        </div>
      </div>
      <textarea placeholder={item.question} onChange={changeHandler} value={userChoose}></textarea>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: el => dispatch(addUserInput(el)),
})

export default connect(null, mapDispatchToProps)(AnswerInput);
