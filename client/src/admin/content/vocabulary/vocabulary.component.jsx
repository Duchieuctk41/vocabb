import React, { useState } from "react";
//import { Link } from "react-router-dom";

import style from "./vocabulary.module.scss";

const Vocabulary = () => {
  const [nameLesson, setNameLesson] = useState();
  const [grade, setGrade] = useState();

  const onChangeNameLesson = (e) => {
    const {value} = e.target;
    setNameLesson(value);
  }
  const onChangeGrade = (e) => {
    const {value} = e.target;
    setGrade(value);
  }

  return (
    <div className={style.vocabulary}>
      <form className={style.form}>
        <div>
          <label htmlFor="ten">Nhập tên</label>
          <input name="ten" type="text" placeholder="Nhập tên" onChange={onChangeNameLesson}/>
        </div>
        <div>
          <label htmlFor="cars">Cấp độ</label>
          <select name="cars" onChange={onChangeGrade}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label htmlFor="image">Chọn hình ảnh</label>
          <input
            name="image"
            type="file"
          />
        </div>
      </form>
      <table>
        <tr>
          <th>Tên</th>
          <th>Cấp độ</th>
          <th>Hình ảnh</th>
        </tr>
        <tr>
          <td>Động vật</td>
          <td>3</td>
          <td>avatar.jpg</td>
        </tr>
      </table>
    </div>
  )
};

export default Vocabulary;
