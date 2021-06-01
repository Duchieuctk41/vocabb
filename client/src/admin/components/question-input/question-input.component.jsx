import React from "react";
import style from "./question-input.component.jsx";

const QuestionInput = () => {

    return (
        <div className={style.choose}>Câu trả lời:
            <div className={style.answer}>
                <label htmlFor="title">Câu trả lời:</label>
                <input type="text" placeholder="Nhập câu trả lời" />
                <select name="correct">
                    <option value="true" selected>true</option>
                </select>
            </div>
        </div>
    )
}

export default QuestionInput;
