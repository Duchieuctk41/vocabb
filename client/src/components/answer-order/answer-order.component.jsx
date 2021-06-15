import React, { useEffect, useState } from "react";
import style from "./answer-order.module.scss";
import { addUserChooseActions, removeUserChooseActions } from "./../../redux/actions/userChooseActions";
import { useSelector, connect } from "react-redux";

const AnswerOrder = ({ item, actived, addItem, removeItem }) => {
  const { userChoose } = useSelector(state => state.userChoose);

  //chọn đáp án, chạy lên trên
  function onClickAddAnswer(item) {
    onClickHandler(item);
    addItem(item);
  }

  function onClickRemoveAnswer(item) {
    removeItem(item);
  }

  let onClickHandler = actived;
  return (
    <div className={style.content}>
      <div className={style.image}>
        <img alt="img" src={item.illustration}></img>
        <div className={style.image__sentense}>
          <span>{item.sentence}</span>
        </div>
      </div>
      <div className={style.answer}>
        <div className={style["--choosed"]}>
          {userChoose && userChoose.map((e) => <button key={e} onClick={() => {
            onClickRemoveAnswer(e);
            if (userChoose.length === 1) onClickHandler(0);
          }
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
                disabled={userChoose.find(item => item === element.title) ? true : false}
              >
                {element.title}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: el => dispatch(addUserChooseActions(el)),
  removeItem: el => dispatch(removeUserChooseActions(el)),
})

export default connect(null, mapDispatchToProps)(AnswerOrder);
