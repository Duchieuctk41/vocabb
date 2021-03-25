import React from "react";
import { Link } from "react-router-dom";

// import components
import Lesson from "../lesson/lesson.component";

// img && scss
import { trophy, dumbbellblue } from "../../img";
import "./main.style.scss";

const Main = () => {
  const lessons = [
    "1cc",
    "2jfkldf",
    "3fdádfdàd",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ];

  let hang2 = false;
  let lap = false;

  return (
    <div className="main">
      {lessons.map((lesson) => {
        if (lap === true) {
          hang2 = false;
          return (lap = false);
        } else {
          if (hang2 === false) {
            hang2 = true;
            return <Lesson lesson={lesson} key={lesson} />;
          }
          if (hang2 === true) {
            let vitri = lessons.indexOf(lesson) + 1;
            let content = lessons[vitri];
            lap = true;
            return <Lesson key={lesson} lesson={lesson} content={content} />;
          }
        }
      })}

      <div className="grid">
        <div className="--complete">
          <img src={trophy} alt="trophy"></img>
        </div>
      </div>
      <div className="exercise">
        <Link className="exercise__link" to="/">
          <img src={dumbbellblue} alt="dumbbelblue"></img>
        </Link>
      </div>
    </div>
  );
};

export default Main;
