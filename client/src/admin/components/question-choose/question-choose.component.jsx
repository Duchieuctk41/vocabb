import React from "react";
import style from "./question-choose.module.scss";
import { addItem } from "./../../../redux/actions/adquestionActions";
import { connect, useSelector } from "react-redux";

const QuestionChoose = ({ addItem }) => {

    const { adquestion } = useSelector(state => state.adquestion);

    const HandlerAdQuestion = (e) => {
        const { name, value } = e.target;
        addItem({ [name]: value });
    }
    
  const HandlerImg = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    addItem({ [name]: file }); // Lấy tất cả thông số của file
  };


    return (
        <div className={style.choose}>Câu trả lời:
            <div className={style.answer}>
                <label htmlFor="title1">Câu trả lời 1</label>
                <input type="text" name="title1" placeholder="Nhập câu trả lời 1" onChange={HandlerAdQuestion} value={adquestion.title1} />
                <select name="correct1" onChange={HandlerAdQuestion}>
                    <option value="false" selected>false</option>
                    <option value="true">true</option>
                </select>
                <input type="file" name="img1" onChange={HandlerImg}/>
            </div>
            <div className={style.answer}>
                <label htmlFor="title2">Câu trả lời 2</label>
                <input type="text" name="title2" placeholder="Nhập câu trả lời 2" onChange={HandlerAdQuestion} value={adquestion.title2} />
                <select name="correct2" onChange={HandlerAdQuestion}>
                    <option value="false" selected>false</option>
                    <option value="true">true</option>
                </select>
                <input type="file" name="img2" onChange={HandlerImg}/>
            </div>

            <div className={style.answer}>
                <label htmlFor="title3">Câu trả lời 3</label>
                <input type="text" name="title3" placeholder="Nhập câu trả lời 3" onChange={HandlerAdQuestion} value={adquestion.title3} />
                <select name="correct3" onChange={HandlerAdQuestion}>
                    <option value="false" selected>false</option>
                    <option value="true">true</option>
                </select>
                <input type="file" name="img3" onChange={HandlerImg}/>
            </div>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: el => dispatch(addItem(el)),
});

export default connect(null, mapDispatchToProps)(QuestionChoose);
