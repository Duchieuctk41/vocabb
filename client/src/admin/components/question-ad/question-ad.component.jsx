import React, { useState } from "react";
import style from "./question-ad.module.scss";
import QuestionChoose from "./../question-choose/question-choose.component";
import QuestionInput from "./../question-input/question-input.component";
import QuestionOrder from "./../question-order/question-order.component";

const QuestionAd = ({item, pos}) => {
  const [type, setType] = useState("choose");
  const [question, setQuestion] = useState();
  const [sentence, setSentence] = useState();
  const [ilusstration, setIllustration] = useState();

  const HandlerType = (e) => {
    const { value } = e.target;
    setType(value);
  }

  return (
    <div className={style.question}>
      <div>Tên lesson: {item.name}</div>
      <div>Cấp độ: {pos}</div>
      <form>
        <div>
          <label htmlFor="type">Loại câu hỏi:</label>
          <select name="type" onChange={HandlerType}>
            <option value="choose" selected>choose</option>
            <option value="input">input</option>
            <option value="order">order</option>
          </select>
        </div>
        <div>
          <label htmlFor="nameQues">Câu hỏi:</label>
          <input type="text" placeholder="Nhập câu hỏi"/>
        </div>
        <div>
          <label htmlFor="nameQues">Sentence:</label>
          <input type="text" placeholder="Nhập Sentence"/>
        </div>
        <div>
          <label htmlFor="image">Hình minh họa</label>
          <input
            name="image"
            type="file"
          />
        </div>
        {type === "choose" ? <QuestionChoose /> : null}
        {type === "input" ? <QuestionInput /> : null}
        {type === "order" ? <QuestionOrder /> : null}
      </form>
    </div>
  );
};

export default QuestionAd;
