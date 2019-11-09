import React from "react";
import './content.css';

const Content = () => {
  return (
    <div className="context">
      <div className="cxt">
        <div className="cxt-title">
          Check the <br />
          Value Added
          <br />
          Tax Number
        </div>
        <div className="cxt-sub-title">
          VAT Checker allows you to check the validity of a VAT number prior to
          applying the 0% rate when selling goods or services to EU countries.
        </div>
      </div>
      <div className="cxt-image">
        <div className="img"></div>
      </div>
    </div>
  );
};

export default Content;
