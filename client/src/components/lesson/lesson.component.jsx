import React from "react";

// import component
import LessonItem from "../lesson-item/lesson-item.component";

// import img && scss
import style from "./lesson.module.scss";

const Lesson = ({ lesson, content }) => {
  // console.log(lesson);
  let item = [lesson.name, lesson.img, lesson._id];
  if (content !== undefined) {
    let item2 = [content.name, content.img, content._id];
    return (
      <div className={style.grid}>
        <LessonItem lesson={item[0]} key={`${item[3]}-item`} imaged={item[1]} />
        <LessonItem
          lesson={item2[0]}
          key={`${item2[2]}-item`}
          imaged={item2[1]}
        />
      </div>
    );
  } else {
    return (
      <div className={style.grid}>
        <LessonItem lesson={item[0]} key={`${item[2]}-item`} imaged={item[1]} />
      </div>
    );
  }
};

export default Lesson;
