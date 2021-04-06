import React from "react";
import { Link } from "react-router-dom";

// import icon &&  scss
import { chick, corona } from "../../img";
import style from "./lesson-item.module.scss";

const LessonItem = ({ lesson }) => {
  return (
    <Link className={style.grid__item} to="/game">
      <div className={style["grid__item-img"]}>
        <span className={style.border}></span>
        <div className={style["grid__item-img--purple"]}>
          <img src={chick} alt="chick"></img>
          <img src={corona} alt="corona" />
        </div>
      </div>
      <h3>{lesson}</h3>
    </Link>
  );
};

export default LessonItem;
