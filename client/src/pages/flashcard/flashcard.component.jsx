import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";

import style from "./flashcard.module.scss";
import { loupe, america, image, add, clear } from "../../img";
import { initVocabURL, checkLoggedIn } from "./../../api";
import { useDispatch, useSelector } from "react-redux";
import { vocabActions } from "./../../redux/actions/vocabActions";
import VocabList from "./../../components/vocab-list/vocab-list";

const Store = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { vocab } = useSelector(state => state.vocab);

  useState(() => {
    dispatch(vocabActions());
  }, [dispatch]);

  checkLogin();

  function checkLogin() {
    axios({
      method: "GET",
      withCredentials: true,
      url: checkLoggedIn(),
    })
      .then((response) => {
        if (response.data.success) {
          history.push("/introduce");
        }
      })
      .catch((error) => console.log(error));
  }

  const [word, setWord] = useState({
    front: "",
    back: "",
  });

  useEffect(() => {
    if (word.front.length || word.back.length > 0) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [word])
  const [toggle, setToggle] = useState(false);
  const changeFrontHandler = e => {
    const { value } = e.target;
    setWord({ ...word, front: value });
  }

  const changeBackHandler = e => {
    const { value } = e.target;
    setWord({ ...word, back: value });
  }

  const onClickAdd = (e) => {
    axios({
      method: "GET",
      withCredentials: true,
      url: initVocabURL(word.front, word.back)
    }).then((response) => {
      console.log(response.data);
    });
    onClickRemove();
    dispatch(vocabActions());
  }


  const onClickRemove = e => {
    setWord({ front: "", back: "" });
  }
  return (
    <div className={style["container-fluid"]}>
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.left__title}>
            <h1>Bộ thẻ: Gia đình</h1>
            <span className={style.left__post}>
              <Link to="#">Xem tất cả thẻ</Link>
            </span>
          </div>
          <div className={style.flashcard}>
            <div className={style.left__tool}>
              <span onClick={() => onClickRemove()} className={toggle ? style.clear : null}>
                <img src={clear} alt="img" />
                Clear
              </span>
              <span onClick={() => onClickAdd()} className={toggle ? style.add : null}>
                <img src={add} alt="img" />
                Thêm
              </span>
            </div>
            <form className={style.left__store}>
              <div className={style["left__store-left"]}>
                <input type="text" placeholder="Thêm mặt trước" onChange={changeFrontHandler} value={word.front} />
              </div>
              <div className={style["left__store-right"]}>
                <input type="text" placeholder="Thêm mặt sau" onChange={changeBackHandler} value={word.back} />
              </div>
              <div className={style["left__store-img"]}>
                <img src={image} alt="img"></img>
                <span>Hình ảnh</span>
              </div>
            </form>
          </div>
          <div className={style.left__added}>
            <h2>Từ vựng đã thêm</h2>
            <span>1 từ</span>
            <table className={style.table}>
              <thead>
                <tr>
                  <th>Mặt trước</th>
                  <th>Mặt sau</th>
                  <th>Hình ảnh</th>
                </tr>
              </thead>
              <tbody>
                {
                  vocab.map(item => <VocabList item={item} />)
                }
              </tbody>
            </table>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.search}>
            <div>
              <img src={loupe} alt="img" />
            </div>
            <input type="text" placeholder="Tìm kiếm" />
          </div>

          <div className={style.note}>
            <h2>Bộ thẻ gần đây:</h2>
            <ul>
              <li>
                <div className={style.note__follow}>
                  <img src={america} alt="img" />
                  <h3>Gia đình</h3>
                  <h4>đã học 40 từ</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
