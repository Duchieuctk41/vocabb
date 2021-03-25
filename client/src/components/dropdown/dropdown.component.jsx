// module
import React from "react";
import { Link } from "react-router-dom";

// img && scss
import { search, vocab } from "../../img";
import "./dropdown.style.scss";

const Dropdown = () => (
  <ul className="menu__sub">
    <li>
      <Link className="menu1__sub-item" to="/">
        <img src={search} alt="search icon"></img>
        Từ điển
      </Link>
    </li>
    <li>
      <Link className="menu1__sub-item" to="/">
        <img src={vocab} alt="flash-card icon"></img>
        Từ vựng
      </Link>
    </li>
  </ul>
);

export default Dropdown;
