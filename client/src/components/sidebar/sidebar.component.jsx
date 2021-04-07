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
import style from "./sidebar.module.scss";

const Sidebar = () => (
  <div className={style.sidebar}>
    {/* Competition */}
    <div className={style.competion}>
      <div className={style.competion__about}>
        <div>
          <h2>Giải đấu Lam Ngọc</h2>
          <img src={info} alt="info"></img>
        </div>
        <span>6Ngày 15Giờ 6Phút</span>
      </div>
      <div className={style.competion__trophy}>
        <div className={style["competion__trophy-item"]}>
          <img src={badge_silver_blank} alt="badge_silver_blank"></img>
        </div>
        <div className={style["competion__trophy-item"]}>
          <img src={badge_gold_blank} alt="badge_gold_blank"></img>
        </div>
        <div className={style["competion__trophy-item"]}>
          <img src={badge_sapphire} alt="badge_sapphire"></img>
        </div>
        <div className={style["competion__trophy-item"]}>
          <img src={badge_locked} alt="badge_locked"></img>
        </div>
        <div className={style["competion__trophy-item"]}>
          <img src={badge_locked} alt="badge_locked"></img>
        </div>
      </div>
      <hr className={style["border-max"]}></hr>
      <div className={style.competion__notif}>
        <img src={duo_sleeping} alt="duo_sleeping"></img>
        <p>Hoàn thành một bài học để tham gia bảng xếp hạng tuần</p>
      </div>
    </div>
    {/* Overall */}
    <div className={style.overall}>
      <div className={style.overall__about}>
        <div>
          <h2>Tổng kết KN</h2>
        </div>
        <Link to="/setting/coach" className={style["overall__about--link"]}>
          Lên lịch
        </Link>
      </div>
      <div className={style.overall__trophy}>
        <div className={style["overall__trophy-item"]}>
          <img src={treasure} alt="treasure"></img>
        </div>
        <div className={style.overall__process}>
          <p>Mục tiêu mỗi ngày</p>
          <div className={style["overall__process-detail"]}>
            <span></span>
            <span>0/10 KN</span>
          </div>
        </div>
      </div>
      <div className={style.overall__notif}>
        <div className={style["--lines"]}>
          <span>20</span>
          <span className={style.line}></span>
        </div>
        <div className={style["--lines"]}>
          <span>15</span>
          <span className={style.line}></span>
        </div>
        <div className={style["--lines"]}>
          <span>10</span>
          <span className={style.line}></span>
        </div>
        <div className={style["--lines"]}>
          <span>5</span>
          <span className={style.line}></span>
        </div>
        <div className={style["--lines"]}>
          <span>0</span>
          <span className={style.line}></span>
        </div>
        <div className={style["--lines"]}>
          <div className={style["--week"]}>
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
    <div className={style.achievement}>
      <div className={style.achievement__about}>
        <div>
          <h2>Thành tích tiếp theo</h2>
        </div>
        <Link to="/profile" className={style["achievement__about--link"]}>
          Xem tất cả
        </Link>
      </div>
      <div className={style.achievement__trophy}>
        <div className={style["achievement__trophy-item"]}>
          <img src={achievement} alt="achievement"></img>
          <span>Cấp 6</span>
        </div>
        <div className={style.achievement__process}>
          <p>Đạt được 4000KN</p>
          <div className={style["achievement__process-detail"]}>
            <span></span>
            <span>3616/4000</span>
          </div>
        </div>
      </div>
    </div>
    {/* Friends */}
    <div className={style.friends}>
      <div className={style.friends__about}>
        <div>
          <h2>Bạn bè</h2>
        </div>
        <span>Tổng KN</span>
      </div>
      <hr className={style["border-max"]}></hr>
      <ul className={style.friends__list}>
        <li>
          <div className={style["item-left"]}>
            <Link to="/profile" className={style["item-left--link"]}>
              <img src={me} alt="me"></img>
            </Link>
            <Link to="/profile" className={style["item-left--link"]}>
              Ngoc Kin Nguyen
            </Link>
          </div>
          <span className={style["item-right"]}>41558KN</span>
        </li>
        <li>
          <div className={style["item-left"]}>
            <Link to="/profile" className={style["item-left--link"]}>
              <img src={me} alt="me"></img>
            </Link>
            <Link to="/profile" className={style["item-left--link"]}>
              Đức Hiếu
            </Link>
          </div>
          <span className={style["item-right"]}>41558KN</span>
        </li>
      </ul>
      <div className={style.with_friends}>
        <div className={style.friends__search}>
          <Link to="/" className={style["friends__search--link"]}>
            Tìm bạn trên facebook
          </Link>
        </div>
        <div className={style.friends__add}>
          <Link to="/" className={style["friends__add--link"]}>
            Mời
          </Link>
          <Link to="/" className={style["friends__add--link"]}>
            Tìm kiếm
          </Link>
        </div>
      </div>
    </div>
    {/* follow */}
    <div className={style.follow}>
      <div className={style.follow__title}>Theo dõi Vocab</div>
      <ul className={style.follow__list}>
        <li className={style["link-to"]}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/duolingo"
            className={style["follow__list--link"]}
          >
            <img src={twitter} alt="twitter"></img>388K
          </a>
        </li>
        <li className={style["link-to"]}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/pencil.816"
            className={style["follow__list--link"]}
          >
            <img src={facebook} alt="facebook"></img>388M
          </a>
        </li>
        <li className={style["link-to"]}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/pencil.816/"
            className={style["follow__list--link"]}
          >
            <img src={instagram} alt="instagram"></img>388M
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Sidebar;
