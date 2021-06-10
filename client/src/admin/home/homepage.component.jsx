// import module
import React from "react";
import { Link, Switch, Route } from "react-router-dom";

// import components
import Userad from "../content/user/user.component";
import Themead from "../content/theme/theme.component";
import Vocabulary from "../content/vocabulary/vocabulary.component";
import Game from "../content/game/game.component";

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
          <span>Bài học</span>
          <i className="fas fa-chevron-right"></i>
        </Link>
        <Link to="/homepageadmin/game">
          <i className="fas fa-bookmark" name="icon"></i>
          <span>Game</span>
          <i className="fas fa-chevron-right"></i>
        </Link>
      </div>
      <div className="right">
        <Switch>
          <Route path="/homepageadmin/user" component={Userad} />
          <Route path="/homepageadmin/theme" component={Themead} />
          <Route path="/homepageadmin/vocabulary" component={Vocabulary} />
          <Route path="/homepageadmin/game" component={Game} />
        </Switch>
      </div>
    </div>
  );
};

export default Homepage;
