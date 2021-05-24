import React from "react";

import { Link } from "react-router-dom";
import { key } from "../../img";
import style from "./popup.module.scss";

import { useDispatch } from "react-redux";
import { gameActions } from "../../redux/actions/gameActions";
import { lessonIdActions } from "./../../redux/actions/lessonActions";

const Popup = ({ idgame, idlesson, grading, grade }) => {
  const dispatch = useDispatch();

  // Lấy id các câu hỏi và id bài học
  const getidQuestionandidLesson = (idgame, idlesson) => {
    dispatch(gameActions(idgame[grading]));
    dispatch(lessonIdActions(idlesson));
  }

  return (
    <div className={style.popup}>
      <div className={style.popup__top}>
        <div className={style["popup__top-left"]}>
          <div className={style["--bold"]}>Cấp độ {grading}/{grade}</div>
          <div></div>
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
