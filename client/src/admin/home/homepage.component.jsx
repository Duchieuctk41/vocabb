// import module
import React from "react";
import { Link, Switch, Route } from "react-router-dom";

// import components
import Userad from "../content/user/user.component";
import Themead from "../content/theme/theme.component";
import Vocabulary from "../content/vocabulary/vocabulary.component";

import { logoad, avatarad } from "../../img";
// import scss
import "./stylehome.scss";

const Homepage = () => {
  return (
    <div className="main">
      <div className="menu">
        <div className="namepage">
          <img src={logoad} alt="Logo" />
          <span>Vocab</span>
        </div>

        <Link to="/homepageadmin">
          <i className="fas fa-home" name="icon"></i>
          <span>Trang chủ</span>
          <i className="fas fa-chevron-right"></i>
        </Link>
        <Link to="/homepageadmin/user">
          <i className="far fa-address-card" name="icon"></i>
          <span>Người dùng</span>
          <i className="fas fa-chevron-right"></i>{" "}
        </Link>
        <Link to="/homepageadmin/theme">
          <i className="fab fa-themeisle" name="icon"></i>
          <span>Chủ đề</span>
          <i className="fas fa-chevron-right"></i>
        </Link>
        <Link to="/homepageadmin/vocabulary">
          <i className="fas fa-bookmark" name="icon"></i>
          <span>Từ vựng</span>
          <i className="fas fa-chevron-right"></i>
        </Link>
      </div>
      <div className="right">
        <div className="headerad">
          <div className="search">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search"></input>
          </div>

          <div className="profile">
            <Link to="#">
              <i className="fas fa-bell"></i>
            </Link>
            <Link to="#">
              <img src={avatarad} alt="avatar" />
            </Link>
            <Link to="#">
              <span>Minh Chính</span>
              <i className="fas fa-angle-down"></i>
            </Link>
          </div>
        </div>
        <Switch>
          <Route path="/homepageadmin/user" component={Userad} />
          <Route path="/homepageadmin/theme" component={Themead} />
          <Route path="/homepageadmin/vocabulary" component={Vocabulary} />
        </Switch>
      </div>
    </div>
  );
};

export default Homepage;
