import React from "react";

// import component
import LessonItem from "../lesson-item/lesson-item.component";

// import img && scss
import style from "./lesson.module.scss";

const Lesson = ({ lesson, content}) => {
  // console.log("lesson_: ",lesson);
  // console.log("content_: ",content);
  let item = [lesson.name, lesson.img, lesson._id, lesson.idgame, lesson.grade];

  if (content !== undefined) {
    let item2 = [content.name, content.img, content._id, content.idgame, content.grade];
    return (
      <div className={style.grid}>
        <LessonItem lesson={item[0]} imaged={item[1]} key={`${item[2]}-item`} idgame={item[3]} idlesson={item[2]} grade={item[4]}/>
        <LessonItem
          lesson={item2[0]}
          imaged={item2[1]}
          key={`${item2[2]}-item`}
          idgame={item2[3]}
          idlesson={item2[2]}
          grade={item2[4]}
        />
      </div>
    );
  } else {
    return (
      <div className={style.grid}>
        <LessonItem lesson={item[0]} key={`${item[2]}-item`} imaged={item[1]} idgame={item[3]} idlesson={item[2]} grade={item[4]}/>
      </div>
    );
  }
};

export default Lesson;
