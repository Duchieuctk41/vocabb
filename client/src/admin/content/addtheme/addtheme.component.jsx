import React from "react";
import "./styleaddtheme.scss";

const Addtheme = () => {
  return (
    <div className="addtheme">
      <h2>Thêm chủ đề mới :</h2>
      <div className="content">
        <table>
          <tr>
            <td><label htmlFor="">Tên chủ đề :</label></td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td><label htmlFor="">Hình ảnh :</label></td>
            <td><input type="file" /></td>
          </tr>
          <tr>
            <td><label htmlFor="">Cấp độ :</label></td>
            <td><input type="number" min="1" max="10"/></td>
          </tr>
        </table>
        <button>Thêm</button>
      </div>
    </div>
  );
};

export default Addtheme;
