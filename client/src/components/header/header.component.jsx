import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import components
import Dropdown from "../dropdown/dropdown.component";

// img && scss
import {
  logo,
  chat,
  store,
  more,
  america,
  corona,
  fire,
  lingots,
  me,
} from "../../img";
import "./header.style.scss";

// import { getVocabList } from "../../redux/vocab/vocab.actions";

const Header = () => {
  const dispatch = useDispatch();
  const { vocab } = useSelector((state) => state.vocab);
  return (
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
};

export default Header;
