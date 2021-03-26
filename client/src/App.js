// import module
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header.component";
import Homepage from "./pages/home/homepage.component";

const localhost = "http://localhost:3001";

function App() {
  const [product, setProduct] = useState([]);

  const vocab = [];
  product.map((val) => {
    vocab.push(val.vocab);
  });

  return (
    <div className="App">
      {/* {product.map((val, key) => {
        return <h1>{val.vocab}</h1>;
      })} */}
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
