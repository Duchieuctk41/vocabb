import React from "react";
import { Link } from "react-router-dom";

// import icon &&  scss
import { chick, corona } from "../../img";
import "./lesson-item.style.scss";

const LessonItem = ({ lesson }) => {
  return (
    <Link className="grid__item" to="/game">
      <div className="grid__item-img">
        <div className="grid__item-img--purple">
          <img src={chick} alt="chick"></img>
          <img src={corona} alt="corona" />
        </div>
      </div>
      <h3>{lesson}</h3>
    </Link>
  );
};

export default LessonItem;
