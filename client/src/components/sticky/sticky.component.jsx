import React from "react";
import { Link } from "react-router-dom";

// icon
import astronaut from "../../assets/img/astronaut.svg";

// scss
import "./sticky.style.scss";

const Sticky = () => (
  <div className="plus">
    <Link className="plus--link" to="/">
      <img src={astronaut} alt="astronaut"></img>
      <span>Plus</span>
    </Link>
  </div>
);

export default Sticky;
