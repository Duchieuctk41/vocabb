import React, { useState } from "react";
import { Link } from "react-router-dom";

import Popup from "../popup/popup.component";

// import icon &&  scss
import { chick, corona } from "../../img";
import style from "./lesson-item.module.scss";

const LessonItem = ({ lesson }) => {
  const [toggle, setTogle] = useState(false);
  return (
    <div className={style.main}>
      <div className={style.itemne}>
        {toggle ? <Popup /> : null}
        <Link className={style.grid__item} onClick={() => setToggle(!toggle)}>
          <div className={style["grid__item-img"]}>
            {/* <span className={style.border}></span>
            <div className={style["grid__item-img--purple"]}>
              <img src={chick} alt="chick"></img>
              <img src={corona} alt="corona" />
            </div> */}
          </div>
          <h3>{lesson}</h3>
        </Link>
      </div>
    </div>
  );
};

export default LessonItem;
