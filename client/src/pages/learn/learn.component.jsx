import React, { useEffect, useState } from "react";
import style from "./learn.module.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { vocabActions } from "./../../redux/actions/vocabActions";
import { close } from "./../../img";

const Learn = () => {
    const [position, setPosition] = useState(0);
    const [toggle, setToggle] = useState(true);
    const [apper, setApper] = useState(true);
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
        setToggle(!toggle);
        setTimeout(()=> {
            return setApper(!apper);
        }, 100);
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
            <div className={style.header}>
                <Link to="/store">
                    <img src={close} className={style.close} alt="img"></img>
                </Link>
                <div className={style.content__note}>{toggle ? "Mặt trước" : "Mặt sau"}</div>
                <div>Bộ thẻ: {store}</div>
            </div>
            <div className={`${style.content} ${toggle ? style.content__active : style.content__none}`} onClick={() => onClickToggle()}>
                {apper ? <div className={style["--active"]}>{front}</div> : null}
                {apper ? null : <div>{back}</div>}
            </div>
            <div className={style.buttons}>
                <button className={style.buttons__return} onClick={() => onclickReturn()} disabled={position === 0}>Quay lại</button>
                <span>{position + 1} / {max}</span>
                <button className={style.buttons__onward} onClick={() => onClickOnward()} disabled={position + 1 === max}>Tiếp</button>
            </div>
        </div>
    )
}

export default Learn;
