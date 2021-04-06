import React, { useState } from "react";

// import component
import LessonItem from "../lesson-item/lesson-item.component";

import Popup from "../popup/popup.component";
// import img && scss
import "./lesson.style.scss";

const Lesson = ({ lesson, content }) => {
  //toggle popup
  // const [toggle, setToggle] = useState(false);
  // console.log(lesson);
  let item = [lesson.name, lesson.img, lesson._id];
  if (content !== undefined) {
    let item2 = [content.name, content.img, content._id];

    return (
      <div className="grid">
        <LessonItem lesson={item[0]} key={`${item[3]}-item`} />
        <LessonItem lesson={item2[0]} key={`${item2[2]}-item`} />
        <Popup />
      </div>
    );
  } else {
    return (
      <div className="grid">
        <LessonItem
          lesson={item[0]}
          key={`${item[2]}-item`}
          // onClick={() => {
          //   setToggle(!toggle);
          // }}
        />
        {/* {toggle ? <Popup /> : null} */}
        <Popup />
      </div>
    );
  }
};

export default Lesson;
