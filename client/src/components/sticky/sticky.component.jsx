import React from "react";
import { Link } from "react-router-dom";

// icon && scss
import { astronaut } from "../../img";
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
