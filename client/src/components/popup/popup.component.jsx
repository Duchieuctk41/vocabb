import React from "react";

import { Link } from "react-router-dom";
import { key } from "../../img";
import style from "./popup.module.scss";

import { useDispatch } from "react-redux";
import { vocabActions } from "../../redux/actions/vocabActions";

const Popup = ({idgame}) => {
  // console.log("idgame ",idgame);

  const dispatch = useDispatch();

  const getidQuestion = (idgame) => {
    // alert(idgame);
    dispatch(vocabActions(idgame));
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
        <Link to="/game" onClick={()=>getidQuestion(idgame)}>Bắt đầu</Link>
      </div>
    </div>
  );
}

export default Popup;
