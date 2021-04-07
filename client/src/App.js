// import module

import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "./scss/style.scss";

// import Header from "./components/header/header.component";
import Homepage from "./pages/home/homepage.component";
import Introduce from "./pages/introduce/introduce.component";
import Game from "./pages/game/game.component";
import SignupLogin from "./pages/signup-login/signup-login.component";
import Learned from "./pages/learned/learned.component";
import Discuss from "./pages/discuss/discuss.component";
import Tudien from "./pages/tudien/tudien.component";
import Store from "./pages/store/store.component";
import Setting from "./pages/setting/setting.component";
import Profile from "./pages/profile/profile.component";
import Flashcard from "./pages/flashcard/flashcard.component";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/introduce" component={Introduce} />
        <Route path="/login" component={SignupLogin} />
        <Route path="/game" component={Game} />
        <Route path="/learned" component={Learned} />
        <Route path="/discuss" component={Discuss} />
        <Route path="/tudien" component={Tudien} />
        <Route path="/store" component={Store} />
        <Route path="/setting" component={Setting} />
        <Route path="/profile" component={Profile} />
        <Route path="/flashcard" component={Flashcard} />
      </Switch>
    </div>
  );
}

export default App;
