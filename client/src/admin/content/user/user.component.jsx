import React from "react";
// import { Link } from "react-router-dom";

import "./styleuser.scss";

const Userad = () => {
  return <div className="useradmin">
    <table>
        <tr>
          <th>Stt</th>
          <th>Tên người dùng</th>
          <th>Email</th>
          <th>Kinh nghiệm</th>
          <th>Số từ đã học</th>
          <th>Số bộ thẻ tự tạo</th>
        </tr>
        <tr>
          <td>01</td>
          <td>Nguyễn Đức Hiếu</td>
          <td>duchieuctk41@gmail.com</td>
          <td>Kinh nghiệm</td>
          <td>Số từ đã học</td>
          <td>Số bộ thẻ tự tạo</td>
        </tr>
      </table>
  </div>;
};

export default Userad;
