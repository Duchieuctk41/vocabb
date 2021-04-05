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
      <span>
        <label>Tên đăng nhập</label>
      </span>
      <span>
        <label>Email</label>
      </span>
      <span>
        <label>
          Hiệu ứng âm thanh<br></br>
        </label>
      </span>
      <span>
        <label>
          Hiệu ứng hoạt hình<br></br>
        </label>
      </span>
      <span>
        <label>
          Thông báo khích lệ<br></br>
        </label>
      </span>
      <span>
        <label>
          Bài tập nói<br></br>
        </label>
      </span>
      <span>
        <label>
          Bài tập nghe<br></br>
        </label>
      </span>
      <span>
        <label>Ảnh hồ sơ</label>
      </span>
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
