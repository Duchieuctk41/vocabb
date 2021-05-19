// module
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { logoutUrl } from "../../api";


// img && scss
import { search } from "../../img";
import "./dropdown.style.scss";

const Dropdown = ({ title, subtitle, classes}) => {
  const [flash, setFlash] = useState();
  const history = useHistory();

  const logoutHandler = (e) => {
    e.preventDefault();
    axios({
      method: "GET",
      withCredentials: true,
      url: logoutUrl(),
    })
      .then((response) => {
        console.log(response);
        response.data.errors
          ? setFlash(response.data.errors)
          : setFlash(response.data.success);
        if (response.data.success) {
          history.push(`/login`);
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <ul className={`menu__sub ${classes ? classes : ""}`}>
      {title.map((item, index) => {
        return (
          <li key={index}>
            <Link className="menu1__sub-item" to={`/${item.to}`} onClick={item.action ? logoutHandler : null}>
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
