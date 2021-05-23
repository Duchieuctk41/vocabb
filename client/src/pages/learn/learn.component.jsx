import React, { useEffect, useState } from "react";
import style from "./learn.module.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { vocabActions } from "./../../redux/actions/vocabActions";
import { close } from "./../../img";

const Learn = () => {
    const [position, setPosition] = useState(0);
    const [toggle, setToggle] = useState(true);
    const dispatch = useDispatch();


    const { vocab } = useSelector(state => state.vocab);
    const { storeid } = useParams();

    let front = vocab.length ? vocab[position].front : null;
    let back = vocab.length ? vocab[position].back : null;
    let store = vocab.length ? vocab[position].store : null;
    let max = vocab.length;

    useEffect(() => {
        dispatch(vocabActions(storeid));
    }, []);

    const onClickToggle = () => {
        return setToggle(!toggle);
    }
    const onclickReturn = () => {
        setToggle(true);
        return setPosition(position - 1);
    }
    const onClickOnward = () => {
        setToggle(true);
        return setPosition(position + 1);
    }


    return (
        <div className={style.container}>
            <Link to="/store">
                <img src={close} className={style.close} alt="img"></img>
            </Link>
            <div>Bộ thẻ: {store}</div>
            <div className={style.content__note}>{toggle ? "Mặt trước" : "Mặt sau"}</div>
            <div className={style.content} onClick={() => onClickToggle()}>
                <div className={toggle ? style["--active"] : style["--none"]}>{front}</div>
                <div className={toggle ? style["--none"] : style["--active"]}>{back}</div>
            </div>
            <div className={style.buttons}>
                <button className={style.buttons__return} onClick={() => onclickReturn()} disabled={position === 0}>quay lại</button>
                <span>{position + 1} / {max}</span>
                <button className={style.buttons__onward} onClick={() => onClickOnward()} disabled={position + 1 === max}>tiếp</button>
            </div>
        </div>
    )
}

export default Learn;
