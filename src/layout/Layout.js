import React from "react";

import Menu from "../components/menu/Menu";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./Layout.css";

const Layout = props => {
  return (
    <div className="mainDiv">
      <Header />
      <Menu caption={props.title} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
