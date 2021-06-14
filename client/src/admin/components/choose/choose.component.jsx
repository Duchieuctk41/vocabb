import React from "react";
import style from "./choose.module.scss";
import { addItem } from "./../../../redux/actions/adquestionActions";
import { connect, useSelector } from "react-redux";

const Choose = ({ item, addItem }) => {

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
        <div className={style.row}>
            <label htmlFor={`title${item}`}>Câu trả lời {item}:</label>
            <input type="text" name={`title${item}`} placeholder={`Nhập câu trả lời ${item}`} onChange={HandlerAdQuestion} value={adquestion[`title${item}`]} />
            <select name={`correct${item}`} onChange={HandlerAdQuestion} value={adquestion[`correct${item}`]}>
                <option value="false" selected>false</option>
                <option value="true">true</option>
            </select>
            <input type="file" name={`img${item}`} onChange={HandlerImg} />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: el => dispatch(addItem(el)),
});

export default connect(null, mapDispatchToProps)(Choose);