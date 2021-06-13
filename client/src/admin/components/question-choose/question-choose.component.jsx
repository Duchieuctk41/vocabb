import React from "react";
import Choose from "./../choose/choose.component";
import style from "./question-choose.module.scss";

const QuestionChoose = () => {

    return (
        <div className={style.choose}>
            <Choose item="1"/>
            <Choose item="2"/>
            <Choose item="3"/>
        </div>
    )
}

export default QuestionChoose;
