import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initAdLessonURL, initAdGameURL } from "./../../../api";
import LessonAdList from "./../../../components/lesson-ad-list/lesson-add-list.component";
import { lessonActions } from "./../../../redux/actions/lessonActions";

import style from "./vocabulary.module.scss";

const Vocabulary = () => {
  const [nameLesson, setNameLesson] = useState();
  const [grade, setGrade] = useState(1);

  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  const dispatch = useDispatch();
  const { lesson } = useSelector(state => state.lesson);

  useEffect(() => {
    dispatch(lessonActions());
  }, [dispatch]);


  const onChangeNameLesson = (e) => {
    const { value } = e.target;
    setNameLesson(value);
  };

  const onChangeGrade = (e) => {
    const { value } = e.target;
    setGrade(value);
  };
  
    const previewFile = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewSource(reader.result);
      };
    };

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    previewFile(file); // Chuyển thành base64
    setSelectedFile(file); // Lấy tất cả thông số của file
    setFileInputState(e.target.value); // Lấy đường dẫn file
  };

  // Click submit
  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    reader.onerror = () => {
      console.error("AHHHHHHHH!!");
    };
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      const response = await fetch("http://localhost:3001/api/upload", {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { "Content-Type": "application/json" },
      })
      const message = await response.json();
      // console.log(message.msg);
      axios({
        method: "GET",
        withCredentials: true,
        url: initAdGameURL(nameLesson, grade),
      })
      axios({
        method: "GET",
        withCredentials: true,
        url: initAdLessonURL(nameLesson, grade, message.msg),
      })
      setNameLesson("");
      setFileInputState("");
      setPreviewSource("");
    } catch (err) {
      console.error(err);
    }
  };

  const onclickInsertGame = (el, i) => {
    alert(el);
  }

  return (
    <div className={style.vocabulary}>
      <form className={style.form} onSubmit={handleSubmitFile}>
        
        <div>
          <label htmlFor="ten">Nhập tên :</label>
          <input name="ten" type="text" placeholder="Nhập tên" onChange={onChangeNameLesson} value={nameLesson} />
        </div>
        <div>
          <label htmlFor="cars">Cấp độ :</label>
          <select name="cars" onChange={onChangeGrade}>
            <option value="1" selected>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label htmlFor="image">Chọn hình ảnh :</label>
          <input
            name="image"
            type="file"
            class="uploadfile"
            accept=".jpg, .png"
            onChange={onChangeImage}
            value={fileInputState}
            className={style.btn}
          />
        </div>
        <button className={style.btn} type="submit" disabled={nameLesson ? false : true}>
          Submit
        </button>
      </form>
      {previewSource && (
        <img src={previewSource} alt="chosen" name="sub" style={{ height: "300px" }} />
      )}
      <h2>DANH SÁCH CÁC BÀI HỌC</h2>
      <table>
        <thead>
          <tr>
            <th name="ten">Tên</th>
            <th name="level">Cấp độ</th>
            <th name= "img">Hình ảnh</th>
          </tr>
        </thead>
        {
          lesson && lesson.map(item => (
            <LessonAdList item={item} key={item.name} actived={onclickInsertGame} />
          ))
        }
      </table>
    </div>
  )
};

export default Vocabulary;
