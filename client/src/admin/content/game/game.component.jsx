import React, { useState } from "react";
import style from "./gamead.module.scss";
import { useSelector } from "react-redux";
import LessonAdList from "./../../../components/lesson-ad-list/lesson-add-list.component";
import QuestionAd from "./../../components/question-ad/question-ad.component";

const Game = () => {

    const { lesson } = useSelector(state => state.lesson);
    const [active, setActive] = useState();
    const [it, setIt] = useState();
    const onclickInsertGame = (element, i) => {
        setActive(element);
        setIt(i);
    }
    return (
        <div className={style.content}>
            Tạo trò chơi
            <table>
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Cấp độ</th>
                        <th>Hình ảnh</th>
                    </tr>
                </thead>
                {
                    lesson && lesson.map(item => (
                        <LessonAdList item={item} key={item.name} actived={onclickInsertGame}/>
                    ))
                }
            </table>
            {active ? <QuestionAd item={it} pos={active}/> : null}
        </div>
    )
}
export default Game;
