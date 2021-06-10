import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./question-ad.module.scss";
import QuestionChoose from "./../question-choose/question-choose.component";
import QuestionInput from "./../question-input/question-input.component";
import QuestionOrder from "./../question-order/question-order.component";
import { connect, useSelector } from "react-redux";
import { addItem } from "./../../../redux/actions/adquestionActions";
import { initQuestionURL } from "./../../../api";

const QuestionAd = ({ item, pos, idles, addItem }) => {

  useEffect(() => {
    addItem({ topic: item.idgame[pos - 1] });
  }, [item.idgame[pos - 1]]);
  const [toggle, setToggle] = useState(false);

  const { adquestion } = useSelector(state => state.adquestion);

  const HandlerAdQuestion = (e) => {
    const { name, value } = e.target;
    addItem({ [name]: value });
  }

  const HandlerImg = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    addItem({ [name]: file });
  };

  const uploadImage = async (base64EncodedImage, tipe) => {
    try {
      const response = await fetch("http://localhost:3001/api/uploadques", {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { "Content-Type": "application/json" },
      })
      const message = await response.json();
      switch (tipe) {
        case "illustration":
          addItem({ illustration: message.msg });
          break;
        case "img1":
          addItem({ img1: message.msg });
          break;
        case "img2":
          addItem({ img2: message.msg });
          break;
        case "img3":
          addItem({ img3: message.msg });
          break;

        default:
          break;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const runUpdateImage = (link, tipe) => {
    const reader = new FileReader();
    reader.readAsDataURL(link);
    reader.onloadend = () => {
      uploadImage(reader.result, tipe);
    };
    reader.onerror = () => {
      console.error("AHHHHHHHH!!");
    };
  }

  const HandlerSubmit = (e) => {
    e.preventDefault();
    return new Promise(async (resolve, reject) => {
      if (adquestion.illustration) {
        runUpdateImage(adquestion.illustration, "illustration");
      };
      if (adquestion.img1) {
        runUpdateImage(adquestion.img1, "img1");
      };
      if (adquestion.img2) {
        runUpdateImage(adquestion.img2, "img2");
      };
      if (adquestion.img3) {
        runUpdateImage(adquestion.img3, "img3");
      };

      setTimeout(() => {
        setToggle(true);
      }, 5000)
    })
  };

  const onClickSubmit = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: initQuestionURL(adquestion.topic, adquestion.question, adquestion.sentence, adquestion.type, adquestion.illustration, adquestion.title1, adquestion.correct1, adquestion.img1, adquestion.title2, adquestion.correct2, adquestion.img2, adquestion.title3, adquestion.correct3, adquestion.img3),
    })
    setToggle(false);
  }

  return (
    <div className={style.question}>
      {toggle ? <button onClick={onClickSubmit}>button submit</button> : null}
      <div>Tên lesson: {item.name}</div>
      <div>Cấp độ: {pos}</div>
      <div>id-game: {item.idgame[pos - 1]}</div>
      <form>
        <div>
          <label htmlFor="type">Loại câu hỏi:</label>
          <select name="type" onChange={HandlerAdQuestion}>
            <option value="choose" selected>choose</option>
            <option value="input">input</option>
            <option value="order">order</option>
          </select>
        </div>
        <div>
          <label htmlFor="question">Câu hỏi:</label>
          <input type="text" name="question" placeholder="Nhập câu hỏi" onChange={HandlerAdQuestion} value={adquestion.question} />
        </div>
        <div>
          <label htmlFor="sentence">Sentence:</label>
          <input type="text" name="sentence" placeholder="Nhập Sentence" onChange={HandlerAdQuestion} value={adquestion.sentence} />
        </div>
        <div>
          <label htmlFor="illustration">Hình minh họa</label>
          <input
            name="illustration"
            type="file"
            onChange={HandlerImg}
          />
        </div>
        {adquestion.type === "choose" ? <QuestionChoose /> : null}
        {adquestion.type === "input" ? <QuestionInput /> : null}
        {adquestion.type === "order" ? <QuestionOrder /> : null}
        <input type="submit" value="Submit image" onClick={HandlerSubmit} />
      </form>

    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (el) => dispatch(addItem(el)),
})

export default connect(null, mapDispatchToProps)(QuestionAd);
