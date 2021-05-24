import React from "react";
//import { Link } from "react-router-dom";

import "./stylevocabulary.scss";

import { house, logoad} from "../../../img";

const Vocabulary = () => {
  return <div className="vocabulary">
    <table>
        <tr>
          <th>Stt</th>
          <th>Từ tiếng anh</th>
          <th>Dịch nghĩa</th>
          <th>Hình ảnh</th>
        </tr>
        <tr>
          <td>01</td>
          <td>Home</td>
          <td>Nhà, Ngôi nhà</td>
          <td>
            <img src={house} alt="Logo" />
            <img src={logoad} alt="Logo" />
          </td>
        </tr>
      </table>
  </div>;
};

export default Vocabulary;
