import React from "react";
import style from "./question-ad.module.scss";

const QuestionAd = () => {
  return (
    <div className={style.question}>
      <form>
        <div>
          <label htmlFor="nameQues"></label>
        </div>
      </form>
    </div>
  );
};

export default QuestionAd;
