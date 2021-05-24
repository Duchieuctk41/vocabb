import React from "react";
import style from "./vocab-all.module.scss";

const VocabAll = ({ item }) => {

    return (
        <tr className={style.tr}>
            <td>{item.front}</td>
            <td>{item.back}</td>
            <td>{item.img}</td>
            <td>{item.store}</td>
        </tr>
    )
}

export default VocabAll;
