// import module

import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./App.css";
import "./scss/style.scss";

import Header from "./components/header/header.component";
import Homepage from "./pages/home/homepage.component";
import Introduce from "./pages/introduce/introduce.component";
import Game from "./pages/game/game.component";
import Login from "./pages/login/login.component";
import Learned from "./pages/learned/learned.component";
import Discuss from "./pages/discuss/discuss.component";
import Tudien from "./pages/tudien/tudien.component";
import Store from "./pages/store/store.component";
import Setting from "./pages/setting/setting.component";
import Profile from "./pages/profile/profile.component";
import Flashcard from "./pages/flashcard/flashcard.component";
import Homeadmin from "./admin/home/homepage.component";
import UploadImage from "./pages/upload-image/upload-image.component";

function App() {
  const location = useLocation();
  console.log(location.pathname);
  const notHeader = [
    "/login",
    "/game",
    "/introduce",
    "/image",
    "/homepageadmin",
  ];
  const toggleHeader = notHeader.filter((item) => item === location.pathname);
  console.log("header", toggleHeader);
  return (
    <div className="App">
      {toggleHeader.length === 0 ? <Header /> : null}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/introduce" component={Introduce} />
        <Route path="/login" component={Login} />
        <Route path="/game" component={Game} />
        <Route path="/learned" component={Learned} />
        <Route path="/discuss" component={Discuss} />
        <Route path="/tudien" component={Tudien} />
        <Route path="/store" component={Store} />
        <Route path="/setting" component={Setting} />
        <Route path="/profile" component={Profile} />
        <Route path="/flashcard" component={Flashcard} />
        <Route path="/image" component={UploadImage} />
        <Route path="/homepageadmin" component={Homeadmin} />
      </Switch>
    </div>
  );
}

export default App;
