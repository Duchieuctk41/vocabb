import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { questionActions } from "../../redux/actions/questionActions";
import axios from "axios";

import AnswerChoose from "./../../components/answer-choose/answer-choose.component";
import AnswerInput from "./../../components/answer-input/anser-input.component";
import AnswerOrder from "./../../components/answer-order/answer-order.component";
import Check from "./../../components/modal/check/check.component";
import { updateGradeUrl, getUserId } from "./../../api";

import { close } from "../../img";
import style from "./game.module.scss";

const Game = () => {
  const [isActive, setIsActve] = useState(null); // hiển thị nút kiểm tra
  const [isTrue, setIsTrue] = useState(false); // hiển thị modal check
  const [process, setProcess] = useState(0); // Thanh process
  const [position, setPosition] = useState(0); // Vị trí câu hỏi được render
  const [mix, setMix] = useState(0); // Số lần trộn
  const [dapanOrder2, setDapanOrder2] = useState([]); // đáp án đúng cho order
  const [userchooseOrder, setUserchooseOrder] = useState([]); // Đáp án mà người dùng chọn
  const [result1, setResult1] = useState(false); // Kết quả đáp án (trả về đúng or sai)
  const [userId, setUserId] = useState();

  const history = useHistory();

  // Lay data in redux
  const { lesson } = useSelector((state) => state.lesson);
  const { vocab } = useSelector((state) => state.vocab);
  const { question } = useSelector((state) => state.question);
  let lessonId = lesson[0]._id;
  let test1 = vocab.listQuestion;
  const dispatch = useDispatch();
  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: getUserId(),
    }).then((response) => {
      setUserId(response.data);
    });
  }, []);

  // Lấy câu dữ liệu câu hỏi, trả về question
  let all = [test1, userId, lessonId, position, mix, history, dispatch];
  useEffect(() => {
    if (position > 9) {
      history.push(`/`);
      setPosition(0);
      setMix(0);
      axios({
        method: "GET",
        withCredentials: true,
        url: updateGradeUrl(userId, lessonId),
      }).then((response) => {
        console.log(response.data);
      });
    } else {
      if (test1 !== undefined) dispatch(questionActions(test1[position]));
    }
  }, [all]);

  // hiển thị nút kiểm tra, lấy đáp án đúng
  const onClickHandlerInput = (stt) => {
    setUserchooseOrder(stt);
    stt ? setIsActve(stt) : setIsActve(null);
  }

  // Lấy giá trị người dùng chọn (nhập)
  const onClickHandler = (stt) => {
    setUserchooseOrder(stt);
    stt ? setIsActve(stt) : setIsActve(null);
    const dapanOrder = question.Answer.filter(item => item.order);
    setDapanOrder2([]);
    for (let i = 0; i < dapanOrder.length; i++) {
      setDapanOrder2((dapanOrder2) => [...dapanOrder2, dapanOrder[i].title], [dapanOrder2]);
    }
  };

  // Kiểm tra đúng sai
  const checkTruFalseHandler = () => {
    if (question.type === "choose") {
      setResult1(question.Answer[isActive - 1].correct);
    }
    if (question.type === "order") {
      JSON.stringify(dapanOrder2) === JSON.stringify(userchooseOrder) ? setResult1(true) : setResult1(false);
    }
    if (question.type === "input") {
      question.Answer[0].title === userchooseOrder ? setResult1(true) : setResult1(false);
      setDapanOrder2(question.Answer[0].title);
    }
    setIsTrue(true);
  };

  //Click nút tiếp tục
  const onClickProcess = () => {
    if (result1) {
      setProcess(process + 10);
      setPosition(position + 1);
      // console.log(position); 
    } else {
      const tam = test1.filter((item, index) => index >= position ? item : null);
      shuffle(tam);
      test1.splice(position, tam.length, ...tam);
      setMix(mix + 1);
    }
    setIsTrue(false);
  };

  /**
   * Shuffles array in place. ES6 version
   * @param {Array} a items An array containing the items.
   */
  function shuffle(a, pos) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  return (
    <div className={style.container}>
      <div className={style.header}>
        <Link to="/">
          <img src={close} className={style.filter_green} alt="img"></img>
        </Link>
        <div className={style.process}>
          <div className={style.processed} style={{ width: `${process}%` }}>
            <div></div>
          </div>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.grid}>
          <h1>
            <span>{question.question}</span>
          </h1>
          <div
            className={
              question.type && question.type === "choose"
                ? style["answer-choose"]
                : style.answer
            }
          >
            {question.type && question.type === "choose"
              ? question.Answer &&
              question.Answer.map((item) => {
                let stt = question.Answer.indexOf(item) + 1;
                return (
                  <AnswerChoose
                    item={item}
                    stt={stt}
                    actived={onClickHandler}
                    isActive={isActive}
                  />
                );
              })
              : null}
            {question.type && question.type === "input" ? (
              <AnswerInput item={question} actived={onClickHandlerInput} />
            ) : null}
            {question.type && question.type === "order" ? (
              <AnswerOrder item={question} actived={onClickHandler} />
            ) : null}
          </div>
        </div>
      </div>
      <div className={style.footer}>
        <div className={style.footer__container}>
          <button className={style.ignore}>Bỏ qua</button>
          <button
            className={`${isActive ? style.check : style.notcheck}`}
            onClick={() => {
              checkTruFalseHandler();
            }}
          >
            Kiểm tra
          </button>
        </div>
      </div>
      {isTrue ? (
        <Check
          report={result1}
          result={dapanOrder2}
          userOrderReport={userchooseOrder}
          processedd={onClickProcess}
        />
      ) : null}
    </div>
  );
};

export default Game;
