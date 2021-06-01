import React from "react";
import style from "./gamead.module.scss";
import { useSelector } from "react-redux";
import LessonAdList from "./../../../components/lesson-ad-list/lesson-add-list.component";

const Game = () => {

    const { lesson } = useSelector(state => state.lesson);

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
                        <LessonAdList item={item} key={item.name} />
                    ))
                }
            </table>
        </div>
    )
}
export default Game;
