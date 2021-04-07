import React from "react";

import style from "./pass.module.scss";

const Pass = () => {
  return (
    <div className={style.main}>
      <div className={style.pass}>
        <div className={style.left1}>
          <h1>Mật khẩu</h1>
          <button type="submit">Lưu thay đổi</button>
        </div>
        <div className={style.left2}>
          <label>
            Tên đăng nhập<br></br>
          </label>
          <label>
            Email<br></br>
          </label>
        </div>
        <div className={style.left3}>
          <input type="text" />
          <input type="text" />
        </div>
      </div>
    </div>
  );
};
export default Pass;
