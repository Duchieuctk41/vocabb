import React from "react";
import style from "./question-choose.module.scss";

const QuestionChoose = () => {

    return (
        <div className={style.choose}>Câu trả lời:
            <div className={style.answer}>
                <label htmlFor="title">Câu trả lời 1</label>
                <input type="text" placeholder="Nhập câu trả lời 1" />
                <select name="correct">
                    <option value="false" selected>false</option>
                    <option value="true">true</option>
                </select>
                <input type="file" />
            </div>
            <div className={style.answer}>
                <label htmlFor="title">Câu trả lời 2</label>
                <input type="text" placeholder="Nhập câu trả lời 2" />
                <select name="correct">
                    <option value="false" selected>false</option>
                    <option value="true">true</option>
                </select>
                <input type="file" />
            </div>

            <div className={style.answer}>
                <label htmlFor="title">Câu trả lời 3</label>
                <input type="text" placeholder="Nhập câu trả lời 3" />
                <select name="correct">
                    <option value="false" selected>false</option>
                    <option value="true">true</option>
                </select>
                <input type="file" />
            </div>

        </div>
    )
}

export default QuestionChoose;
