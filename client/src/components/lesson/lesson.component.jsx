import React from "react";

// import component
import LessonItem from "../lesson-item/lesson-item.component";

// import img && scss
import "./lesson.style.scss";

const Lesson = ({ lesson, content }) => {
  if (content !== undefined) {
    return (
      <div className="grid">
        <LessonItem lesson={lesson} key={`${lesson}-item`} />
        <LessonItem lesson={content} key={`${content}-item`} />
      </div>
    );
  } else {
    return (
      <div className="grid">
        <LessonItem lesson={lesson} key={`${lesson}-item`} />
      </div>
    );
  }
};

export default Lesson;
