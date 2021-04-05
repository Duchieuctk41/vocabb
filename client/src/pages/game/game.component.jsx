import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { close, cold, ramen, rice } from "../../img";

// redux
import { useDispatch, useSelector } from "react-redux";
import { vocabActions } from "../../redux/actions/vocabActions";

import style from "./game.module.scss";

const Game = () => {
  // lay data api vocab
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(vocabActions());
  }, [dispatch]);

  // Lay data in redux
  const { vocab } = useSelector((state) => state.vocab);

  let learned = ["hot", "noodles", "man"];
  let chuahoc = [];

  // console.log("vocab.length: ", vocab.length);

  // Push vao mang chuahoc
  vocab.forEach((item) => {
    let chon = false;
    learned.forEach((i) => {
      if (item.EnName == i) {
        chon = true;
      }
    });
    if (chon == false) {
      chuahoc.push(item.EnName);
    }
  });
  // console.log("lan1", chuahoc);

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // Dao danh sach trong mang chua hoc
  shuffle(chuahoc);
  // console.log("lan2 ", chuahoc);

  // Tim vi tri ptu trong mang vocab
  let indexCurrent;
  vocab.filter((item) => {
    if (chuahoc[0] == item.EnName) {
      indexCurrent = vocab.indexOf(item);
    }
  });

  let listAnswer = [chuahoc[0]];

  console.log("hihi ", listAnswer);

  // for (let i = 0; i < 10; i++) {
  //   if (listAnswer.length >= 3) {
  //     break;
  //   } else {
  //     let randomIndex = Math.floor(Math.random() * vocab.length);
  //     let result = listAnswer.filter(
  //       (item) => item == vocab[randomIndex].EnName
  //     );

  //     if (result.length === 0) {
  //       listAnswer.push(vocab[randomIndex].EnName);
  //     }
  //   }
  // }

  console.log("list answer nef ", listAnswer);

  let i = 0;
  return (
    <div className={style.container}>
      <div className={style.header}>
        <Link to="/">
          <img src={close} className={style.filter_green}></img>
        </Link>
        <div className={style.process}></div>
      </div>
      <div className={style.content}>
        <div className={style.grid}>
          <h1>
            <span>Đâu là "nóng"?</span>
          </h1>
          <div className={style.answer}>
            {/* item */}
            {vocab.map((item) => {
              i++;
              if (i > 3) {
                return;
              }
              return (
                <div className={style.answer__item}>
                  <div className={style["answer__item-img"]}>
                    <img src={rice}></img>
                  </div>
                  <div className={style["answer__item-sub"]}>
                    <span>{item.EnName}</span>
                    <span>1</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={style.footer}>
        <div className={style.footer__container}>
          <Link to="/">Bỏ qua</Link>
          <Link to="/">Kiểm tra</Link>
        </div>
      </div>
    </div>
  );
};

export default Game;
