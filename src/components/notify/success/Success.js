import React from "react";
import './success.css';

const Success = () => {
  return (
    <div className="notify">
      <div className="success">
        <div className="scc-title">
          The number is valid on the specified date.
        </div>
        <div>
          <strong>Trader Name: </strong>
        </div>
        <div>
          <strong>Trader Address: </strong>
        </div>
      </div>
    </div>
  );
};

export default Success;
