import React from "react";
import style from "./question-order.module.scss";

const QuestionOrder = () => {

    return (
        <div>
            <div className={style.answer}>
                <label htmlFor="title">Câu trả lời 1</label>
                <input type="text" placeholder="Nhập câu trả lời 1" />
                <select name="correct">
                    <option value="false" selected>false</option>
                    <option value="true">true</option>
                </select>
                <select name="order">
                    <option disabled selected value>Chọn thứ tự</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
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
                <select name="order">
                    <option disabled selected value>Chọn thứ tự</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
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
                <select name="order">
                    <option disabled selected value>Chọn thứ tự</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
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
                <select name="order">
                    <option disabled selected value>Chọn thứ tự</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
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
                <select name="order">
                <option disabled selected value>Chọn thứ tự</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input type="file" />
            </div>
        </div>
    )
}

export default QuestionOrder;
