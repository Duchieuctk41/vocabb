import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// import components
import Lesson from "../lesson/lesson.component";

// img && scss
import { trophy, dumbbellblue } from "../../img";
import style from "./main.module.scss";

import { useDispatch, useSelector } from "react-redux";

import { lessonActions } from "./../../redux/actions/lessonActions";
import { studiedActions } from "./../../redux/actions/studiedActions";


const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(lessonActions());
    dispatch(studiedActions());
  }, [dispatch]);

  let hang2 = false;
  let lap = false;
  const { lesson } = useSelector((state) => state.lesson);
  // useEffect(() => {
  //   // console.log("lesson: ", lesson);
  //   // console.log("fdfas",studied.filter(item => item.lessonId === "609e545814e8251128b96d84"));
  // }, [studied]);
  return (
    <div className={style.main}>
      {lesson && lesson.map((item) => {
        
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
        return false;
      })}

      <div className={style.trophy}>
        <div className={style["--complete"]}>
          <img src={trophy} alt="trophy"></img>
        </div>
      </div>
      <div className={style.exercise}>
        <Link className={style.exercise__link} to="/game">
          <img src={dumbbellblue} alt="dumbbelblue"></img>
        </Link>
      </div>
    </div>
  );
};

export default Main;
