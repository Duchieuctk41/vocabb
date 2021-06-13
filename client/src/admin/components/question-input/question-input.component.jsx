import React from "react";
import style from "./question-input.module.scss";
import { addItem } from "./../../../redux/actions/adquestionActions";
import { connect, useSelector } from "react-redux";

const QuestionInput = ({ addItem }) => {

    const { adquestion } = useSelector(state => state.adquestion);

    const HandlerAdQuestion = (e) => {
        const { name, value } = e.target;
        addItem({ [name]: value });
    }

    return (
        <div className={style.row}>
                <label htmlFor="title">Câu trả lời:</label>
                <input type="text" name="title1" placeholder="Nhập câu trả lời" onChange={HandlerAdQuestion} value={adquestion.title1}/>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: el => dispatch(addItem(el)),
});

export default connect(null, mapDispatchToProps) (QuestionInput);
