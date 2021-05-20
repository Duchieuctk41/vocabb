import React from "react";

import { Link } from "react-router-dom";
import { key } from "../../img";
import style from "./popup.module.scss";

import { useDispatch } from "react-redux";
import { vocabActions } from "../../redux/actions/vocabActions";
import { lessonIdActions } from "./../../redux/actions/lessonActions";

const Popup = ({ idgame, idlesson }) => {
  // console.log("idgame ",idgame);
  // console.log("idlesson ", idlesson);
  const dispatch = useDispatch();

  const getidQuestionandidLesson = (idgame, idlesson) => {
    // alert(idgame);
    dispatch(vocabActions(idgame[0]));
    dispatch(lessonIdActions(idlesson));
  }

  return (
    <div className={style.popup}>
      <div className={style.popup__top}>
        <div className={style["popup__top-left"]}>
          <div className={style["--bold"]}>Cấp độ 0/5</div>
          <div>Đã học 1/3</div>
        </div>
        <div className={style["popup__top-right"]}>
          <img src={key} alt="key" />
        </div>
      </div>
      <div className={style.popup__bottom}>
        <Link to="/game" onClick={() => getidQuestionandidLesson(idgame, idlesson)}>Bắt đầu</Link>
      </div>
    </div>
  );
}

export default Popup;
