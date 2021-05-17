// module
import React from "react";
import { Link } from "react-router-dom";

// img && scss
import { search } from "../../img";
import "./dropdown.style.scss";

const Dropdown = ({ title, subtitle, classes }) => {
  return (
    <ul className={`menu__sub ${classes ? classes : ""}`}>
      {title.map((item, index) => {
        return (
          <li key={index}>
            <Link className="menu1__sub-item" to={`/${item.to}`}>
              <img src={search} alt="search icon"></img>
              {item.name}
            </Link>
            {subtitle ? <div>{subtitle}</div> : null}
          </li>
        )
      })}
    </ul>
  );
};

export default Dropdown;
