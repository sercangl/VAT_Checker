import React from "react";
import './menu.css';
import {NavLink} from "react-router-dom";

const Menu = props => {
  return (
    <div className="main-sub-menu">
      <div className="sub-menu-text">{props.caption}</div>
      <div>
        <div className="sub-menu-item">
          <NavLink to="/">Home</NavLink>
          </div>
        <div className="sub-menu-link">
          <NavLink to="/contact">Contact</NavLink>
          </div>
        
      </div>
    </div>
  );
};

export default Menu;
