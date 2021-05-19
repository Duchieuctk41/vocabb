import { Link } from "react-router-dom";
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
          <Link className="menu1__item" to="/discuss">
            <img src={chat} alt="chat"></img>
            Thảo luận
          </Link>
        </li>
        <li>
          <Link className="menu1__item" to="/store">
            <img src={store} alt="store"></img>Flashcard
          </Link>
        </li>
        <li>
          <Link className="menu1__item" to="/">
            <img src={more} alt="more"></img>Xem thêm
          </Link>
          {/* Dropdown */}
          <Dropdown
            title={[
              { name: "Từ điển", to: "tudien" },
              { name: "Từ vựng", to: "learned" },
            ]}
          />
        </li>
      </ul>
      <ul className="menu2">
        <li>
          <span className="menu2__item">
            <img src={america} alt="america"></img>
          </span>
          <Dropdown
            title={[
              { name: "Tiếng Anh", to: "" },
              { name: "Thêm khóa học mới", to: "" },
            ]}
            classes={"--language"}
          />
        </li>
        <li>
          <span className="menu2__item corona-color">
            <img src={corona} alt="corona"></img>
            147
          </span>
          <Dropdown
            title={[{ name: "Vương miện", to: "" }]}
            subtitle={"Nâng cấp kỹ năng của bạn để nhận vương miện"}
            classes={"--corona"}
          />
        </li>
        <li>
          <span className="menu2__item">
            <img src={fire} alt="fire"></img>0
          </span>
          <Dropdown
            title={[{ name: "Streak", to: "" }]}
            subtitle={"Hoàn thành một bài học mỗi ngày để có thêm streak"}
            classes={"--streak"}
          />
        </li>
        <li>
          <span className="menu2__item lingots-color">
            <img src={lingots} alt="lingots"></img>
            60
          </span>
          <Dropdown
            title={[{ name: "Lingots", to: "" }]}
            subtitle={"Bạn có 64 lingots"}
            classes={"--lingots"}
          />
        </li>
        <li>
          <span className="menu2__item">
            <img src={me} alt="me"></img>
          </span>
          <Dropdown
            title={[
              { name: "Hồ sơ của bạn", to: "profile" },
              { name: "Cài đặt", to: "setting" },
              { name: "Đăng xuất", to: "introduce" , action: "logout"},
            ]}
            classes={"--me"}
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;
