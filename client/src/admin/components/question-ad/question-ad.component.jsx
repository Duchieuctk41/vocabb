import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./question-ad.module.scss";
import QuestionChoose from "./../question-choose/question-choose.component";
import QuestionInput from "./../question-input/question-input.component";
import QuestionOrder from "./../question-order/question-order.component";
import { connect, useSelector } from "react-redux";
import { addItem, clearItem } from "./../../../redux/actions/adquestionActions";
import { initQuestionURL, initQuestionOrderURL } from "./../../../api";

const QuestionAd = ({ item, pos, addItem, clearItem }) => {

  useEffect(() => {
    addItem({ topic: item.idgame[pos - 1] });
  }, [item.idgame[pos - 1]]);
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);

  const { adquestion } = useSelector(state => state.adquestion);

  const HandlerAdQuestion = (e) => {
    const { name, value } = e.target;
    addItem({ [name]: value });
  }

  const HandlerImg = (e) => {
    setToggle1(true);
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

  const HandlerSubmitImage = (e) => {
    e.preventDefault();
    setToggle1(false);
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

  const HandlerSubmitData = () => {
    let urlAPI = initQuestionURL(adquestion.topic, adquestion.question, adquestion.sentence, adquestion.type, adquestion.illustration, adquestion.title1, adquestion.correct1, adquestion.img1, adquestion.title2, adquestion.correct2, adquestion.img2, adquestion.title3, adquestion.correct3, adquestion.img3);
    if (adquestion.type === "order")
      urlAPI = initQuestionOrderURL(adquestion.topic, adquestion.question, adquestion.sentence, adquestion.type, adquestion.illustration, adquestion.title1, adquestion.correct1, adquestion.order1, adquestion.title2, adquestion.correct2, adquestion.order2, adquestion.title3, adquestion.correct3, adquestion.order3, adquestion.title4, adquestion.correct4, adquestion.order4, adquestion.title5, adquestion.correct5, adquestion.order5, adquestion.title6, adquestion.correct6, adquestion.order6);

    axios({
      method: "GET",
      withCredentials: true,
      url: urlAPI
    });

    setToggle(false);
    return clearItem();

  };

  return (
    <div className={style.question}>
      <div className={style.question__btn}>
        <input type="submit" value="X??? l?? file ???nh" onClick={HandlerSubmitImage} className={style.btns} disabled={toggle1 ? false : true} />
        <button onClick={HandlerSubmitData} className={style.btns} disabled={toggle ? false : true}>L??u c??u h???i</button>
      </div>
      <ul>
        <li>T??n lesson: {item.name}</li>
        <li>C???p ?????: {pos}</li>
        <li>id-game: {item.idgame[pos - 1]}</li>
      </ul>

      <form>
        <div className={style.row}>
          <label htmlFor="type">Lo???i c??u h???i:</label>
          <select name="type" onChange={HandlerAdQuestion} value={adquestion.type}>
            <option value="choose">choose</option>
            <option value="input">input</option>
            <option value="order">order</option>
          </select>
        </div>
        <div className={style.row}>
          <label htmlFor="question">C??u h???i:</label>
          <input type="text" name="question" placeholder="Nh???p c??u h???i" onChange={HandlerAdQuestion} value={adquestion.question} />
        </div>
        {
          adquestion.type === "choose" ? null : <div className={style.row}>
            <label htmlFor="sentence">T??? h???i:</label>
            <input type="text" name="sentence" placeholder="Nh???p Sentence" onChange={HandlerAdQuestion} value={adquestion.sentence} />
          </div>
        }

        <div className={style.row}>
          <label htmlFor="illustration">H??nh minh h???a:</label>
          <input
            name="illustration"
            type="file"
            onChange={HandlerImg}
          />
        </div>
        {adquestion.type === "choose" ? <QuestionChoose /> : null}
        {adquestion.type === "input" ? <QuestionInput /> : null}
        {adquestion.type === "order" ? <QuestionOrder /> : null}
      </form>

    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (el) => dispatch(addItem(el)),
  clearItem: () => dispatch(clearItem()),
})

export default connect(null, mapDispatchToProps)(QuestionAd);
