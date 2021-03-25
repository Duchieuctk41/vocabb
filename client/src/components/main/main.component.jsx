import React from "react";
import { Link } from "react-router-dom";

// icon
import chick from "../../assets/img/chick.svg";
import sayhi from "../../assets/img/sayhi.svg";
import hi from "../../assets/img/hi.svg";
import babyboy from "../../assets/img/baby-boy.svg";
import buy from "../../assets/img/dress.svg";
import man from "../../assets/img/man.svg";
import burger from "../../assets/img/burger.svg";
import pencil from "../../assets/img/pencil.svg";
import trophy from "../../assets/img/trophy.svg";
import dumbbellblue from "../../assets/img/dumbbell-blue.svg";

import "./main.style.scss";

const Main = () => (
  <div className="main">
    <div className="grid grid--first">
      <div className="grid__item">
        <div className="grid__item-img">
          <div className="grid__item-img--purple">
            <img src={chick} alt="chick"></img>
          </div>
        </div>
        <h3>Cơ bản</h3>
      </div>
    </div>
    <div className="grid">
      <div className="grid__item">
        <div className="grid__item-img">
          <div className="grid__item-img--purple">
            <img src={hi} alt="hi"></img>
          </div>
        </div>
        <h3>Chào hỏi</h3>
      </div>
      <div className="grid__item">
        <div className="grid__item-img">
          <div className="grid__item-img--purple">
            <img src={sayhi} alt="sayhi"></img>
          </div>
        </div>
        <h3>Giới thiệu</h3>
      </div>
    </div>
    <div className="grid">
      <div className="grid__item">
        <div className="grid__item-img">
          <div className="grid__item-img--purple">
            <img src={babyboy} alt="babyboy"></img>
          </div>
        </div>
        <h3>Gia đình</h3>
      </div>
    </div>
    <div className="grid">
      <div className="grid__item">
        <div className="grid__item-img">
          <div className="grid__item-img--purple">
            <img src={buy} alt="buy"></img>
          </div>
        </div>
        <h3>Mua sắm</h3>
      </div>
      <div className="grid__item">
        <div className="grid__item-img">
          <div className="grid__item-img--purple">
            <img src={man} alt="man"></img>
          </div>
        </div>
        <h3>Xã hội</h3>
      </div>
    </div>
    <div className="grid">
      <div className="grid__item">
        <div className="grid__item-img">
          <div className="grid__item-img--purple">
            <img src={burger} alt="burger"></img>
          </div>
        </div>
        <h3>Nhà hàng</h3>
      </div>
      <div className="grid__item">
        <div className="grid__item-img">
          <div className="grid__item-img--purple">
            <img src={pencil} alt="pencil"></img>
          </div>
        </div>
        <h3>Trường học</h3>
      </div>
    </div>
    <div className="grid">
      <div className="--complete">
        <img src={trophy} alt="trophy"></img>
      </div>
    </div>
    <div className="exercise">
      <Link className="exercise__link" to="/">
        <img src={dumbbellblue} alt="dumbbelblue"></img>
      </Link>
    </div>
  </div>
);

export default Main;
