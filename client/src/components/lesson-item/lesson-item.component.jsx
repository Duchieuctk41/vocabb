import React, { useEffect, useState } from "react";

import Popup from "../popup/popup.component";

// import icon &&  scss
import { chick, corona } from "../../img";
import style from "./lesson-item.module.scss";
import { useSelector } from "react-redux";

const LessonItem = ({ lesson, imaged ,idgame, idlesson, grade}) => {
  // console.log("hieu",grade);

  const { studied } = useSelector((state) => state.studied);

  let lessonId = studied.filter(item => item.lessonId === idlesson);
  let grading = lessonId.length > 0 ? lessonId[0].grade : 0;
  
  const [toggle, setToggle] = useState(false);
  return (
    <div className={style.item}>
      <div className={style.grid__item}>
        <div
          className={style["grid__item-img"]}
          onClick={() => setToggle(!toggle)}
        >
          <span className={style.border}></span>
          <div className={style["grid__item-img--purple"]}>
            {imaged ? (
              <img src={imaged} alt="chick"></img>
            ) : (
              <img src={chick} alt="chick"></img>
            )}
            
            <span><img src={corona} alt="corona" />
            <span>{lessonId.length > 0 ? lessonId[0].grade : null}</span>
            </span>
          </div>
        </div>
        <h3>{lesson}</h3>
        {toggle ? <Popup idgame={idgame} idlesson={idlesson} grading={grading} grade={grade}/> : null}
      </div>
    </div>
  );
};

export default LessonItem;
