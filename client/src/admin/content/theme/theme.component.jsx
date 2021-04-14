import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import Addtheme from "../addtheme/addtheme.component";

import "./styletheme.scss";

const Theme = () => {
  return (
    <div className="themeadmin">
      <div className="addtheme">
        <label htmlFor="">Thêm chủ đề mới: </label>
        <Link to="/homepageadmin/theme/addtheme">Add theme</Link>
      </div>
      <Switch>
          <Route path="/homepageadmin/theme/addtheme" component={Addtheme} />
        </Switch>
      <table>
        <tr>
          <th>Stt</th>
          <th>Tên chủ đề</th>
          <th>Hình ảnh</th>
          <th>Số từ</th>
        </tr>
      </table>
    </div>
  );
};

export default Theme;
