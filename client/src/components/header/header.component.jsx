import React from "react";
import { Link } from "react-router-dom";

// logo & icon
import logo from "../../assets/img/learn.svg";
import chat from "../../assets/img/chat.svg";
import store from "../../assets/img/store.svg";
import more from "../../assets/img/more.svg";
import america from "../../assets/img/america.svg";
import corona from "../../assets/img/corona.svg";
import fire from "../../assets/img/fire.svg";
import lingots from "../../assets/img/lingots.svg";
import me from "../../assets/img/me.jpg";

// import components
import Dropdown from "../dropdown/dropdown.component";

import "./header.style.scss";

const Header = () => (
  <header className="header container">
    <ul className="menu1">
      <li>
        <Link className="menu1__item" to="/">
          <img src={logo} alt="logo"></img>
          Học
        </Link>
      </li>
      <li>
        <Link className="menu1__item" to="/">
          <img src={chat} alt="chat"></img>
          Thảo luận
        </Link>
      </li>
      <li>
        <Link className="menu1__item" to="/">
          <img src={store} alt="store"></img>Cửa hàng
        </Link>
      </li>
      <li>
        <Link className="menu1__item" to="/">
          <img src={more} alt="more"></img>Xem thêm
        </Link>
        {/* Dropdown */}
        <Dropdown />
      </li>
    </ul>
    <ul className="menu2">
      <li>
        <span className="menu2__item">
          <img src={america} alt="america"></img>
        </span>
      </li>
      <li>
        <span className="menu2__item corona-color">
          <img src={corona} alt="corona"></img>
          147
        </span>
      </li>
      <li>
        <span className="menu2__item">
          <img src={fire} alt="fire"></img>0
        </span>
      </li>
      <li>
        <span className="menu2__item lingots-color">
          <img src={lingots} alt="lingots"></img>
          60
        </span>
      </li>
      <li>
        <span className="menu2__item">
          <img src={me} alt="me"></img>
        </span>
      </li>
    </ul>
  </header>
);

export default Header;
