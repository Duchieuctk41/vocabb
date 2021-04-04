import React, { useState } from "react";
import {Link, Switch, Route} from "react-router-dom";
import Pass from "../../components/pass/pass.component";
import User from "../../components/user/user.component";

import{
    robot,
} from "../../img";

import  style from "./setting.module.scss";
const Setting = ({history}) => {
    return (
        <div className={style.main}>
            <div className={style.header}>

            </div>
            <div className={style.content}>
                
                <Switch>
                    <Route path="/setting/pass" component={Pass} />
                    <Route path="/setting/user" component={User} />
                </Switch>
                
                <div className={style.right}>
                    <div className={style.menu}>
                        <div className={style.avt}>
                            <img src={robot} alt="robot" name="avt"/>
                            <h2 onClick={() => {history.push("/setting/pass")}}>Avatar49</h2>
                            <Link name="profile" to="#">Xem hồ sơ của bạn</Link>
                        </div>
                        {/* target="blank" */}
                        <Link name="user" to="/setting/user" id="user">Tài khoản</Link>
                        <Link name="user" to="#">Học ngôn ngữ</Link>
                        <Link name="user" to="#">Hồ sơ</Link>
                        <Link name="user" to="/setting/pass" id="pass">Mật khẩu</Link>
                        <Link name="user" to="#">Thông báo</Link>
                        <Link name="user" to="#">Vocab Plus</Link>
                        <Link name="user" to="#">Chế độ huấn luyện</Link>
                        <Link name="user" to="#">Chia sẻ quá trình học</Link>
                        <Link name="user" to="#">Quyền riêng tư</Link>
                    </div>
                </div>

                <div className={style.left4}>
                    <div className={style.bottom1}>
                        <Link name="bottom1" to="#">Giới thiệu</Link>
                        <Link name="bottom1" to="#">Học đường</Link>
                        <Link name="bottom1" to="#">Ứng dụng</Link>
                        <Link name="bottom1" to="#">Trợ giúp</Link>
                        <Link name="bottom1" to="#">Nội quy</Link>
                        <Link name="bottom1" to="#">Công việc</Link>
                    </div>
                    <div className={style.bottom2}>
                        <Link name="bottom2" to="#">Điều khoản</Link>
                        <Link name="bottom2" to="#">Quyền riêng tư</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Setting;