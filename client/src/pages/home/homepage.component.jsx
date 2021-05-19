import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { checkLoggedIn } from "../../api";

// import components
import Main from "../../components/main/main.component";
import Sticky from "../../components/sticky/sticky.component";
import Sidebar from "../../components/sidebar/sidebar.component";

// import scss
import style from "./homepage.module.scss";

const Homepage = () => {
  const history = useHistory();

  checkLogin();
  function checkLogin(){
    axios({
      method: "GET",
      withCredentials: true,
      url: checkLoggedIn(),
    })
      .then((response) => {
        // console.log(response);

        if (response.data.success) {
          history.push("/introduce");
        }
      })
      .catch((error) => console.log(error));
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
