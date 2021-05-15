import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { close } from "../../img";
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
  const [isActive, setIsActve] = useState(null);
  const [isTrue, setIsTrue] = useState(false);
  const [process, setProcess] = useState(0);
  const [dapanOrder2, setDapanOrder2] = useState([]); // đáp án đúng cho order
  const [userchooseOrder, setUserchooseOrder] = useState([]);


  const history = useHistory();

  // Lay data in redux
  const { vocab } = useSelector((state) => state.vocab);
  const { question } = useSelector((state) => state.question);
  // console.log("question: ", question);
  const listQuestion = vocab.listQuestion;
  let test1 = listQuestion;
  // console.log("test1 ",test1);
  // lay data cau hoi
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(vocabActions());
  }, [dispatch]);
  
  // console.log(listQuestion);
  dispatch(questionActions(test1[1])); //dayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
 
  // dispatch(questionActions(test1[2]));
  const onClickHandler = (stt) => {
    setUserchooseOrder(stt);
  
    stt ? setIsActve(stt) : setIsActve(null);
  };



  // lay ket qua nguoi dung chon
  // const onClickUserchooseOrder = (ketqua) => {
  //   alert(ketqua);
  // }

  // Kiểm tra đúng sai
  const checkTruFalseHandler = () => {
    const dapanOrder = question.Answer.filter(item => item.order);
    for(let i = 0; i < dapanOrder.length; i++) {
      setDapanOrder2((dapanOrder2) =>[...dapanOrder2, dapanOrder[i].title], [dapanOrder2]);
    }
    setIsTrue(true);
  };
  // useEffect(() => {
  //   console.log("toi ",dapanOrder2);
  // },[])

  // click nút tiếp tục
  const onClickProcess = (val) => {
    console.log(question.Answer);
    if (test1.length === 0) history.push(`/`);
    if (val) {
      setProcess(process + 10);
      test1.splice(0, 1);
    } else {
      shuffle(test1);
    }
    // console.log("fsdfsdfsda", test1);

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
              <AnswerOrder item={question} actived={onClickHandler}/>
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
          report={question.type === "choose" ? question.Answer[isActive - 1].correct : null}
          result={find[0].title}
          processedd={onClickProcess}
          orderReport={dapanOrder2}
          userOrderReport={userchooseOrder}
        />
      ) : null}
    </div>
  );
};

export default Game;
