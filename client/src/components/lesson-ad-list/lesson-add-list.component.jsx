import React from "react";

const LessonAdList = ({ item }) => {

    const onclickInsertGame = (el) => {
        alert(item.name);
    }
    const grade = item.grade;
    let listgrade = [];

        for (let i = 1; i <= grade; i++) listgrade.push(i);
    return (
        <tbody>
            <tr>
                <td>{item.name}</td>
                <td>{item.grade}</td>
                <td>
                    <img src={item.img} alt="image" />
                </td>
                {listgrade.map(el=><td onClick={() => onclickInsertGame(el)} key={el}>{el}</td>)}
            </tr>
        </tbody>
    )
}

export default LessonAdList;
