// import module

import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "./scss/style.scss";

import Header from "./components/header/header.component";
import Homepage from "./pages/home/homepage.component";
import Introduce from "./pages/introduce/introduce.component";
import Game from "./pages/game/game.component";
import SignupLogin from "./pages/signup-login/signup-login.component";
import Learned from "./pages/learned/learned.component";
import Discuss from "./pages/discuss/discuss.component";
import Tudien from "./pages/tudien/tudien.component";
import Setting from "./pages/setting/setting.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/introduce" component={Introduce} />
        <Route path="/login" component={SignupLogin} />
        <Route path="/game" component={Game} />
        <Route path="/learned" component={Learned} />
        <Route path="/discuss" component={Discuss} />
        <Route path="/tudien" component={Tudien} />
        <Route path="/setting" component={Setting} />
      </Switch>
    </div>
  );
}

export default App;
