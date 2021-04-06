import React from "react";
import { Link } from "react-router-dom";

// icon && scss
import { astronaut } from "../../img";
import style from "./sticky.module.scss";

const Sticky = () => (
  <div className={style.plus}>
    <Link className={style["plus--link"]} to="/">
      <img src={astronaut} alt="astronaut"></img>
      <span>Plus</span>
    </Link>
  </div>
);

export default Sticky;
