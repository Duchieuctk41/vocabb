import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

import style from "./store.module.scss";
import { loupe, america} from "../../img";
import { checkLoggedIn } from "./../../api";
import StoreItem from "./store-item/store-item.component";

import { storeActions } from "./../../redux/actions/storeActions";
import { useDispatch, useSelector } from "react-redux";


const Store = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  checkLogin();
  const { store } = useSelector((state) => state.store);
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

  useEffect(() => {
    dispatch(storeActions());
  }, [dispatch]);

  return (
    <div className={style["container-fluid"]}>
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.left__title}>
            <h1>Bộ thẻ từ vựng</h1>
            <span className={style.left__post}>
              <Link to="/flashcard">Tạo bộ thẻ mới</Link>
            </span>
          </div>
         {store.map(item => (
            <StoreItem key={item._id} item={item}/>
         ))}
          
        </div>
        <div className={style.right}>
          <div className={style.search}>
            <div>
              <img src={loupe} alt="" />
            </div>
            <input type="text" placeholder="Tìm kiếm" />
          </div>

          <div className={style.note}>
            <h2>Bộ thẻ gần đây:</h2>

            <ul>
              <li>
                <div className={style.note__follow}>
                  <img src={america} alt="" />
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
