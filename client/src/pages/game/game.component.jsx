import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { close, rice } from "../../img";
import AnswerChoose from "./../../components/answer-choose/answer-choose.component";
import AnswerInput from "./../../components/answer-input/anser-input.component";
import AnswerOrder from "./../../components/answer-order/answer-order.component";
import Check from "./../../components/modal/check/check.component";

// redux
import { useDispatch, useSelector } from "react-redux";
import { vocabActions } from "../../redux/actions/vocabActions";
import { questionActions } from "../../redux/actions/questionActions";

import style from "./game.module.scss";

const Game = () => {
  const [position, setPosition] = useState(0);
  const [isActive, setIsActve] = useState(null);
  const [isTrue, setIsTrue] = useState(false);
  const [process, setProcess] = useState(0);

  // Lay data in redux
  const { vocab } = useSelector((state) => state.vocab);
  const { question } = useSelector((state) => state.question);
  // console.log("question: ", question);
  const listQuestion = vocab.listQuestion;
  // lay data api vocab
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(vocabActions());
  }, [dispatch]);
  // console.log(listQuestion);
  dispatch(questionActions(listQuestion[position]));

  const onClickHandler = (stt) => {
    setIsActve(stt);
  };

  const checkTruFalseHandler = () => {
    setIsTrue(true);
  };

  const onClickProcess = (val) => {
    if (val) {
      setPosition(position + 1);
      setProcess(process + 10);
    } else {
      console.log("truoc ", listQuestion);
      let test1 = [];
      for (let i = position; i < listQuestion.length; i++) {
        test1.push(listQuestion[i]);
      }
      shuffle(test1);
      for (let i = position; i < listQuestion.length; i++) {
        let j = 0;
        listQuestion[i] = test1[j];
        j++;
      }
      console.log("sau ", listQuestion);
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

  let find =
    question.Answer && question.Answer.filter((item) => item.correct === true);

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
              <AnswerInput item={question} />
            ) : null}
            {question.type && question.type === "order" ? (
              <AnswerOrder item={question} />
            ) : null}
          </div>
        </div>
      </div>
      <div className={style.footer}>
        <div className={style.footer__container}>
          <button className={style.ignore}>Bỏ qua</button>
          <button
            className={`${isActive ? style.check : style.notcheck}`}
            onClick={checkTruFalseHandler}
          >
            Kiểm tra
          </button>
        </div>
      </div>
      {isTrue ? (
        <Check
          report={question.Answer[isActive - 1].correct}
          result={find[0].title}
          processedd={onClickProcess}
        />
      ) : null}
    </div>
  );
};

export default Game;
