import React, {useState} from "react";
import "./checker.css";

const Checker = props => {
  const [vatNumber, setVatNumber] = useState('');
  
  const inputHandler = (e) => {
    setVatNumber(e.target.value);
  }

  const clickHandler = () => {
    const value = vatNumber;
    props.check(value);
  }

  return (
    <div className="checker">
      <div className="form">
        <form >
          <div className="input">
            <input type="text" onChange={e => inputHandler(e)} value={vatNumber} />
            <button type="button" onClick={clickHandler}>
              check
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checker;
