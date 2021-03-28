import React from "react";

// import component
import LessonItem from "../lesson-item/lesson-item.component";

// import img && scss
import "./lesson.style.scss";

const Lesson = ({ lesson, content }) => {
  // console.log(lesson);
  let item = [lesson.name, lesson.img, lesson._id];
  if (content !== undefined) {
    let item2 = [content.name, content.img, content._id];
    return (
      <div className="grid">
        <LessonItem lesson={item[0]} key={`${item[3]}-item`} />
        <LessonItem lesson={item2[0]} key={`${item2[2]}-item`} />
      </div>
    );
  } else {
    return (
      <div className="grid">
        <LessonItem lesson={item[0]} key={`${item[2]}-item`} />
      </div>
    );
  }
};

export default Lesson;
