import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { checkLoggedIn, initAchievementURL, apiAchievementURL } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { achievementActions } from "./../../redux/actions/achievementActions";

// import components
import Main from "../../components/main/main.component";
import Sticky from "../../components/sticky/sticky.component";
import Sidebar from "../../components/sidebar/sidebar.component";

// import scss
import style from "./homepage.module.scss";

const Homepage = () => {
  const history = useHistory();
  checkLogin();
  const dispatch = useDispatch();

  // Kiểm tra đăng nhập chưa
  function checkLogin() {
    axios({
      method: "GET",
      withCredentials: true,
      url: checkLoggedIn(),
    })
      .then((response) => {
        // console.log(response);

        if (response.data.success) {
          history.push("/introduce");
        } else {
          initAchievement();
          dispatch(achievementActions());
        }
      })
      .catch((error) => console.log(error));
  }

  // Tạo data achievement
  function initAchievement() {
    axios({
      method: "GET",
      withCredentials: true,
      url: initAchievementURL(),
    })
  }

  return (
    <div className={style.content}>
      <Main />
      <Sticky />
      <Sidebar />
    </div>
  );
};

export default Homepage;
