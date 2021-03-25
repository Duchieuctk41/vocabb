// import module
import React from "react";

// import components
import Main from "../components/main/main.component";
import Sticky from "../components/sticky/sticky.component";
import Sidebar from "../components/sidebar/sidebar.component";

// import scss
import "./homepage.style.scss";

const Homepage = () => {
  return (
    <div className="content">
      <Main />
      <Sticky />
      <Sidebar />
    </div>
  );
};

export default Homepage;
