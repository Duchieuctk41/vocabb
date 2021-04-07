import React, { useState } from "react";

import Popup from "../popup/popup.component";

// import icon &&  scss
import { chick, corona } from "../../img";
import style from "./lesson-item.module.scss";

const LessonItem = ({ lesson }) => {
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
            <img src={chick} alt="chick"></img>
            <img src={corona} alt="corona" />
          </div>
        </div>
        <h3>{lesson}</h3>
        {toggle ? <Popup /> : null}
      </div>
    </div>
  );
};

export default LessonItem;
