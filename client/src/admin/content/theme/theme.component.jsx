import React from "react";
import { Link } from "react-router-dom";

import { house, logoad} from "../../../img";

import "./styletheme.scss";

const Theme = () => {
  return (
    <div className="themeadmin">
      <div className="adtheme">
        <label htmlFor="">Thêm chủ đề mới: </label>
        <Link to="/addtheme">Add theme</Link>
      </div>
      <table>
        <tr>
          <th>Stt</th>
          <th>Tên chủ đề</th>
          <th>Hình ảnh</th>
          <th>Số từ</th>
        </tr>
        <tr>
          <td>01</td>
          <td>Giao tiếp</td>
          <td>
            <img src={house} alt="Logo" />
            <img src={logoad} alt="Logo" />
          </td>
          <td>Số từ</td>
          <td><button>Sửa</button></td>
          <td><button>Xóa</button></td>
        </tr>
      </table>
    </div>
  );
};

export default Theme;
