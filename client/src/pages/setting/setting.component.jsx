import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Pass from "../../components/pass/pass.component";
import Coach from "../../components/coach/coach.component";
import User from "../../components/user/user.component";

import { robot } from "../../img";

import style from "./setting.module.scss";
const Setting = ({ history }) => {
  return (
    <div className={style.main}>
      <div className={style.header}></div>
      <div className={style.content}>
        <Switch>
          <Route path="/setting/pass" component={Pass} />
          <Route path="/setting/coach" component={Coach} />
          <Route path="/setting/user" component={User} />
        </Switch>

        <div className={style.right}>
          <div className={style.menu}>
            <div className={style.avt}>
              <img src={robot} alt="robot" name="avt" />
              <h2
                onClick={() => {
                  history.push("/setting/pass");
                }}
              >
                Avatar49
              </h2>
              <Link name="profile" to="/profile">
                Xem hồ sơ của bạn
              </Link>
            </div>
            <ul className={style.menu__list}>
              <li className={style["--active"]}>
                <Link name="user" to="/setting/user" id="user">
                  Tài khoản
                </Link>
              </li>
              <li>
                <Link name="user" to="/setting/coach" id="coach">
                  Đặt chế độ tập luyện
                </Link>
              </li>
              <li>
                <Link name="user" to="/setting/pass" id="pass">
                  Mật khẩu
                </Link>
              </li>
              <li>
                <Link name="user" to="#">
                  Thông báo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={style.footer}>
          <hr className={style.hr} />
          <div className={style.footer__list}>
            <ul className="menu">
              <li>
                <Link className="item" to="#">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link className="item" to="#">
                  Học đường
                </Link>
              </li>
              <li>
                <Link className="item" to="#">
                  Ứng dụng
                </Link>
              </li>
              <li>
                <Link className="item" to="#">
                  Trợ giúp
                </Link>
              </li>
              <li>
                <Link className="item" to="#">
                  Nội quy
                </Link>
              </li>
              <li>
                <Link className="item" to="#">
                  Công việc
                </Link>
              </li>
              <li>
                <Link className="item" to="#">
                  Điều khoản
                </Link>
              </li>
              <li>
                <Link className="item" to="#">
                  Quyền riêng tư
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Setting;
