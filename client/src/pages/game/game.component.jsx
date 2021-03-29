import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { close, cold, ramen, rice } from "../../img";

// redux
import { useDispatch, useSelector } from "react-redux";
import { vocabActions } from "../../redux/actions/vocabActions";

import style from "./game.module.scss";

const Game = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(vocabActions());
  }, [dispatch]);

  const { vocab } = useSelector((state) => state.vocab);
  let i = 0;
  let chon3 = [];
  let rand = Math.random().toFixed(0) * vocab.length;
  chon3.push(rand);
  while (chon3.length < 3) {
    rand = Math.random().toFixed(0) * vocab.length;
    chon3.forEach((item) => {
      if (item == rand) {
        console.log("vao ko?", chon3);
        return;
      } else {
        chon3.push(rand);
      }
    });
  }
  console.log(chon3);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <img src={close}></img>
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
              // let chon3 =
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
