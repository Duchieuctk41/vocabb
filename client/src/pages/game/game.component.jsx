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
  const [process, setprocess] = useState(10);

  // Lay data in redux
  const { vocab } = useSelector((state) => state.vocab);
  const { question } = useSelector((state) => state.question);
  // console.log("question: ", question);
  const listQuestion = vocab.listQuestion;
  // lay data api vocab
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(vocabActions());
    dispatch(questionActions(listQuestion[0]));
  }, [dispatch]);
  // console.log(listQuestion);

  const onClickHandler = (stt) => {
    setIsActve(stt);
  };

  const checkTruFalseHandler = () => {
    setIsTrue(true);
  };

  let find =
    question.Answer && question.Answer.filter((item) => item.correct === true);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <Link to="/">
          <img src={close} className={style.filter_green} alt="img"></img>
        </Link>
        <div className={style.process}>
          <div className={style.processed}>
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
        />
      ) : null}
    </div>
  );
};

export default Game;
