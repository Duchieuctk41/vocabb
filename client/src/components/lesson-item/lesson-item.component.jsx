import React from "react";

// import icon &&  scss
import { chick } from "../../img";
import "./lesson-item.style.scss";

const LessonItem = ({ lesson }) => (
  <div className="grid__item">
    <div className="grid__item-img">
      <div className="grid__item-img--purple">
        <img src={chick} alt="chick"></img>
      </div>
    </div>
    <h3>{lesson}</h3>
  </div>
);

export default LessonItem;
