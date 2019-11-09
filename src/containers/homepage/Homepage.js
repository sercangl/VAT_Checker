import React from "react";
import "./homepage.css";

const Homepage = props => {
  return (
    <div className="mainDiv">
      <header className="header">
        <div className="nav">
          <div className="header-support">support@despatchecloud.com</div>
          <div className="header-number">01377 455 180</div>
        </div>
        <div className="header-company-name">Despatch Cloud</div>
      </header>
      <main>
        <div className="main-sub-menu">
          <div className="sub-menu-text">VAT Checker</div>
          <div>
            <div className="sub-menu-item">Home</div>
            <div className="sub-menu-link">Contact</div>
          </div>
        </div>

        <div className="context">
          <div className="cxt">
            <div className="cxt-title">
              Check the <br />
              Value Added
              <br />
              Tax Number
            </div>
            <div className="cxt-sub-title">
              VAT Checker allows you to check the validity of a VAT number prior
              to applying the 0% rate when selling goods or services to EU
              countries.
            </div>
          </div>
          <div className="cxt-image">
            <div className="img"></div>
          </div>
        </div>
        <div className="title">VAT Checker</div>
        <div className="checker">
          <div className="form">
            <form>
              <div className="input">
                <input type="text" />
                <button type="submit">check</button>
              </div>
            </form>
          </div>
        </div>
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
          <div className="alert">
            The number is invalid on the specified date.
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Homepage;
