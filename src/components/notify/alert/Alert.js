import React from "react";
import "./alert.css";

const Alert = (props) => {
  return (
    <div className="notify">
      <div className="alert">{props.message}</div>
    </div>
  );
};

export default Alert;
