import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";

import style from "./flashcard.module.scss";
import { loupe, america, image, add, clear } from "../../img";
import { initVocabURL, checkLoggedIn } from "./../../api";
import { useDispatch, useSelector } from "react-redux";
import { vocabActions } from "./../../redux/actions/vocabActions";
import VocabList from "./../../components/vocab-list/vocab-list";
import { connect } from "react-redux";
import { addItem } from "./../../redux/actions/storeActions";

const Store = ({ addItem, fetchItem }) => {
  const history = useHistory();
  const { storeid } = useParams();

  const { vocab } = useSelector(state => state.vocab);
  const { store } = useSelector(state => state.store);

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

  const [toggle, setToggle] = useState(false);
  const [word, setWord] = useState({
    front: "",
    back: "",
  });

  // Bắt sự kiện click, hiển thị xóa sử từ vựng
  useEffect(() => {
    if (word.front.length || word.back.length > 0) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [word]);

  // Bắt sự kiện thay đổi back
  const changeFrontHandler = e => {
    const { value } = e.target;
    setWord({ ...word, front: value });
  }

  // Bắt sự kiện thay đổi back
  const changeBackHandler = e => {
    const { value } = e.target;
    setWord({ ...word, back: value });
  }

  // Thêm từ vựng
  const onClickAdd = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: initVocabURL(storeid, word.front, word.back)
    }).then((response) => {
      console.log(response.data);
    });
    onClickRemove();
    addItem(storeid);
    fetchItem(storeid)
  }

  // Clear input
  const onClickRemove = () => {
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
            <span>{store[1].quantity && store[1].quantity} từ</span>
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
                  <h4>đã học {store[1] && store[1].quantity} từ</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: el => dispatch(addItem(el)),
  fetchItem: el => dispatch(vocabActions(el)),
})

export default connect(null, mapDispatchToProps)(Store);
