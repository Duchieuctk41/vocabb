// import module

import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header.component";
import Homepage from "./pages/home/homepage.component";
import Introduce from "./pages/introduce/introduce.component";
import Game from "./pages/game/game.component";
import SignupLogin from "./pages/signup-login/signup-login.component";

function App() {
  return (
    <div className="App">
      {/* {product.map((val, key) => {
        return <h1>{val.vocab}</h1>;
      })} */}
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/introduce" component={Introduce} />
        <Route path="/login" component={SignupLogin} />
        <Route path="/game" component={Game} />
      </Switch>
    </div>
  );
}

export default App;
