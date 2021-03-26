import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// import components
import Lesson from "../lesson/lesson.component";

// img && scss
import { trophy, dumbbellblue } from "../../img";
import "./main.style.scss";

import { useDispatch, useSelector } from "react-redux";

import { loadVocab } from "../../redux/actions/vocabActions";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadVocab());
  }, [dispatch]);

  let hang2 = false;
  let lap = false;
  const { vocab } = useSelector((state) => state.vocab);
  return (
    <div className="main">
      {/* {vocab.map((lesson) => {
        let vitri = vocab.indexOf(lesson) + 1;
        let content;
        vocab.length == vitri
          ? (content = { vocab: "" })
          : (content = vocab[vitri]);
        return (
          <Lesson
            key={lesson.vocab}
            lesson={lesson.vocab}
            content={content.vocab}
          />
        );
      })} */}
      {vocab.map((lesson) => {
        if (lap === true) {
          hang2 = false;
          return (lap = false);
        } else {
          if (hang2 === false) {
            hang2 = true;
            return <Lesson lesson={lesson.vocab} key={lesson.id} />;
          }
          if (hang2 === true) {
            let vitri = vocab.indexOf(lesson) + 1;
            let content;
            vocab.length == vitri
              ? (content = { vocab: undefined })
              : (content = vocab[vitri]);
            lap = true;
            return (
              <Lesson
                key={lesson.vocab}
                lesson={lesson.vocab}
                content={content.vocab}
              />
            );
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
