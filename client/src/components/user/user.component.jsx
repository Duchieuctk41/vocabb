import React from "react";
import { Link } from "react-router-dom";

import style from "./user.module.scss";

const User = () => (
  <div className={style.left}>
    <div className={style.left1}>
      <h1>Cài đặt tài khoản</h1>
      <button type="submit">Lưu thay đổi</button>
    </div>
    <div className={style.left2}>
      <label>
        Tên đăng nhập<br></br>
      </label>
      <label>
        Email<br></br>
      </label>
      <label>
        Hiệu ứng âm thanh<br></br>
      </label>
      <label>
        Hiệu ứng hoạt hình<br></br>
      </label>
      <label>
        Thông báo khích lệ<br></br>
      </label>
      <label>
        Bài tập nói<br></br>
      </label>
      <label>
        Bài tập nghe<br></br>
      </label>
      <label>Ảnh hồ sơ</label>
    </div>
    <div className={style.left3}>
      <input type="text" />
      <input type="text" />
      <tr>
        <input type="checkbox" />
      </tr>
      <tr>
        <input type="checkbox" />
      </tr>
      <tr>
        <input type="checkbox" />
      </tr>
      <tr>
        <input type="checkbox" />
      </tr>
      <tr>
        <input type="checkbox" />
      </tr>
      <input type="file" className={style.custom} />
      <Link to="#">Tắt tài khoản của tôi</Link>
      <Link to="#">Xóa tài khoản của tôi</Link>
    </div>
  </div>
);

export default User;
