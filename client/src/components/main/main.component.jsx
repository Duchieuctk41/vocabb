import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// import components
import Lesson from "../lesson/lesson.component";

// img && scss
import { trophy, dumbbellblue } from "../../img";
import "./main.style.scss";

import { useDispatch, useSelector } from "react-redux";

import { lessonActions } from "../../redux/actions/lessonActions";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(lessonActions());
  }, [dispatch]);

  let hang2 = false;
  let lap = false;
  const { lesson } = useSelector((state) => state.lesson);
  // console.log("lesson: ", lesson);
  return (
    <div className="main">
      {lesson.map((item) => {
        if (lap === true) {
          hang2 = false;
          return (lap = false);
        } else {
          if (hang2 === false) {
            hang2 = true;
            return <Lesson lesson={item} key={item._id} />;
          }
          if (hang2 === true) {
            let vitri = lesson.indexOf(item) + 1;
            let content;
            lesson.length === vitri
              ? (content = { item: undefined })
              : (content = lesson[vitri]);
            lap = true;
            return <Lesson key={item._id} lesson={item} content={content} />;
          }
        }
      })}

      <div className="grid">
        <div className="--complete">
          <img src={trophy} alt="trophy"></img>
        </div>
      </div>
      <div className="exercise">
        <Link className="exercise__link" to="/game">
          <img src={dumbbellblue} alt="dumbbelblue"></img>
        </Link>
      </div>
    </div>
  );
};

export default Main;
