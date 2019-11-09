import React from "react";
import './menu.css'

const Menu = props => {
  return (
    <div className="main-sub-menu">
      <div className="sub-menu-text">{props.caption}</div>
      <div>
        <div className="sub-menu-item">Home</div>
        <div className="sub-menu-link">Contact</div>
      </div>
    </div>
  );
};

export default Menu;
