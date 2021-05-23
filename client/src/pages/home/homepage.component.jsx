import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { checkLoggedIn, initAchievementURL } from "../../api";

// import components
import Main from "../../components/main/main.component";
import Sticky from "../../components/sticky/sticky.component";
import Sidebar from "../../components/sidebar/sidebar.component";

// import scss
import style from "./homepage.module.scss";

const Homepage = () => {
  const history = useHistory();
  checkLogin();

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
