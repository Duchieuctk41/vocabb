import React from "react";
import style from "./order.module.scss";
import { addItem } from "./../../../redux/actions/adquestionActions";
import { connect, useSelector } from "react-redux";

const Order = ({ item, addItem }) => {
    const { adquestion } = useSelector(state => state.adquestion);

    const HandlerAdQuestion = (e) => {
        const { name, value } = e.target;
        addItem({ [name]: value });
    }

    return (
        <div className={style.answer}>
            <label htmlFor={`title${item}`}>Câu trả lời {item}</label>
            <input type="text" name={`title${item}`} placeholder="Nhập câu trả lời 1" onChange={HandlerAdQuestion} value={adquestion[`title${item}`]} />
            <select name={`correct${item}`} onChange={HandlerAdQuestion}>
                <option value="false" selected>false</option>
                <option value="true">true</option>
            </select>
            {
                adquestion[`correct${item}`] === "true" ? <select name={`order${item}`} onChange={HandlerAdQuestion}>
                    <option disabled selected value>Chọn thứ tự</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select> : null
            }
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    addItem: el => dispatch(addItem(el)),
});

export default connect(null, mapDispatchToProps)(Order);
