import React from "react";

// import component
import LessonItem from "../lesson-item/lesson-item.component";

// import img && scss
import style from "./lesson.module.scss";

const Lesson = ({ lesson, content}) => {
  // console.log("lesson_: ",lesson);
  // console.log("content_: ",content);
  let item = [lesson.name, lesson.img, lesson._id, lesson.idgame];

  if (content !== undefined) {
    let item2 = [content.name, content.img, content._id, content.idgame];
    return (
      <div className={style.grid}>
        <LessonItem lesson={item[0]} imaged={item[1]} key={`${item[2]}-item`} idgame={item[3]}/>
        <LessonItem
          lesson={item2[0]}
          imaged={item2[1]}
          key={`${item2[2]}-item`}
          idgame={item2[3]}
        />
      </div>
    );
  } else {
    return (
      <div className={style.grid}>
        <LessonItem lesson={item[0]} key={`${item[2]}-item`} imaged={item[1]} idgame={item[3]}/>
      </div>
    );
  }
};

export default Lesson;
