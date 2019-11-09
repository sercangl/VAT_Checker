import React from "react";

import './header.css'

const Header = props => {
  return (
    <header className="header">
      <div className="nav">
        <div className="header-support">support@despatchecloud.com</div>
        <div className="header-number">01377 455 180</div>
      </div>
      <div className="header-company-name">Despatch Cloud</div>
    </header>
  );
};

export default Header;
