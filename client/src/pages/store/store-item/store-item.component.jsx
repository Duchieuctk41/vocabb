import React from "react";
import style from "./store-item.module.scss";
import { babyboy } from "./../../../img";
import { Link, useHistory } from "react-router-dom";
import { vocabActions } from "./../../../redux/actions/vocabActions";
import { useDispatch } from "react-redux";

const StoreItem = ({ item }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const onClickToLearn = () => {
        dispatch(vocabActions(item._id));
        history.push(`/learn/${item._id}`);
    }
    const onClickToFlashCard = () => {
        dispatch(vocabActions(item._id));
    }

    return (
        <div className={style.left__store} key={item._id}>
            <div className={style["left__store-left"]} onClick={() => onClickToLearn()}>
                <span className={style.avatar}>
                    <img src={babyboy} alt="" />
                </span>
                <h3>{item.name}</h3>
                <h4>{item.quantity} từ</h4>
            </div>
            <span className={style["left__store-right"]}>
                <Link to={{pathname: `flashcard/${item._id}`}} onClick={() => onClickToFlashCard()}>Thêm từ vựng</Link>
            </span>
        </div>
    )
}

export default StoreItem;
