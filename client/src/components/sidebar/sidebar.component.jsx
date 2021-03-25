import React from "react";
import { Link } from "react-router-dom";

// import img && scss
import {
  me,
  info,
  badge_silver_blank,
  badge_gold_blank,
  badge_sapphire,
  badge_locked,
  duo_sleeping,
  treasure,
  achievement,
  facebook,
  instagram,
  twitter,
} from "../../img";
import "./sidebar.style.scss";

const Sidebar = () => (
  <div className="sidebar">
    {/* Competition */}
    <div className="competion">
      <div className="competion__about">
        <div>
          <h2>Giải đấu Lam Ngọc</h2>
          <img src={info} alt="info"></img>
        </div>
        <span>6Ngày 15Giờ 6Phút</span>
      </div>
      <div className="competion__trophy">
        <div className="competion__trophy-item">
          <img src={badge_silver_blank} alt="badge_silver_blank"></img>
        </div>
        <div className="competion__trophy-item">
          <img src={badge_gold_blank} alt="badge_gold_blank"></img>
        </div>
        <div className="competion__trophy-item">
          <img src={badge_sapphire} alt="badge_sapphire"></img>
        </div>
        <div className="competion__trophy-item">
          <img src={badge_locked} alt="badge_locked"></img>
        </div>
        <div className="competion__trophy-item">
          <img src={badge_locked} alt="badge_locked"></img>
        </div>
      </div>
      <hr className="border-max"></hr>
      <div className="competion__notif">
        <img src={duo_sleeping} alt="duo_sleeping"></img>
        <p>Hoàn thành một bài học để tham gia bảng xếp hạng tuần</p>
      </div>
    </div>
    {/* Overall */}
    <div className="overall">
      <div className="overall__about">
        <div>
          <h2>Tổng kết KN</h2>
        </div>
        <Link to="/" className="overall__about--link">
          Lên lịch
        </Link>
      </div>
      <div className="overall__trophy">
        <div className="overall__trophy-item">
          <img src={treasure} alt="treasure"></img>
        </div>
        <div className="overall__process">
          <p>Mục tiêu mỗi ngày</p>
          <div className="overall__process-detail">
            <span></span>
            <span>0/10 KN</span>
          </div>
        </div>
      </div>
      <div className="overall__notif">
        <div className="--lines">
          <span>20</span>
          <span className="line"></span>
        </div>
        <div className="--lines">
          <span>15</span>
          <span className="line"></span>
        </div>
        <div className="--lines">
          <span>10</span>
          <span className="line"></span>
        </div>
        <div className="--lines">
          <span>5</span>
          <span className="line"></span>
        </div>
        <div className="--lines">
          <span>0</span>
          <span className="line"></span>
        </div>
        <div className="--lines">
          <div className="--week">
            <span>T2</span>
            <span>T3</span>
            <span>T4</span>
            <span>T5</span>
            <span>T6</span>
            <span>T7</span>
            <span>CN</span>
          </div>
        </div>
      </div>
    </div>
    {/* achievement next */}
    <div className="achievement">
      <div className="achievement__about">
        <div>
          <h2>Thành tích tiếp theo</h2>
        </div>
        <Link to="/" className="achievement__about--link">
          Xem tất cả
        </Link>
      </div>
      <div className="achievement__trophy">
        <div className="achievement__trophy-item">
          <img src={achievement} alt="achievement"></img>
          <span>Cấp 6</span>
        </div>
        <div className="achievement__process">
          <p>Đạt được 4000KN</p>
          <div className="achievement__process-detail">
            <span></span>
            <span>3616/4000</span>
          </div>
        </div>
      </div>
    </div>
    {/* Friends */}
    <div className="friends">
      <div className="friends__about">
        <div>
          <h2>Bạn bè</h2>
        </div>
        <span>Tổng KN</span>
      </div>
      <hr className="border-max"></hr>
      <ul className="friends__list">
        <li>
          <div className="item-left">
            <Link to="/" className="item-left--link">
              <img src={me} alt="me"></img>
            </Link>
            <Link to="/" className="ml-12 item-left--link">
              Ngoc Kin Nguyen
            </Link>
          </div>
          <span className="item-right">41558KN</span>
        </li>
        <li>
          <div className="item-left">
            <Link to="/" className="item-left--link">
              <img src={me} alt="me"></img>
            </Link>
            <Link to="/" className="item-left--link ml-12">
              Đức Hiếu
            </Link>
          </div>
          <span className="item-right">41558KN</span>
        </li>
      </ul>
      <div className="with_friends">
        <div className="friends__search">
          <Link to="/" className="friends__search--link">
            Tìm bạn trên facebook
          </Link>
        </div>
        <div className="friends__add">
          <Link to="/" className="friends__add--link">
            Mời
          </Link>
          <Link to="/" className="friends__add--link">
            Tìm kiếm
          </Link>
        </div>
      </div>
    </div>
    {/* follow */}
    <div className="follow">
      <div className="follow__title">Theo dõi Vocab</div>
      <ul className="follow__list">
        <li>
          <Link to="/" className="follow__list--link">
            <img src={twitter} alt="twitter"></img>388K
          </Link>
        </li>
        <li>
          <Link to="/" className="follow__list--link">
            <img src={facebook} alt="facebook"></img>388M
          </Link>
        </li>
        <li>
          <Link to="/" className="follow__list--link">
            <img src={instagram} alt="instagram"></img>388M
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Sidebar;
