import React, { useState } from "react";
import Draggable from "react-draggable";

const Calculator = ({setShowCalculator}) => {
  const [calcMinimize, setCalcMinimize] = useState(false);
  // const [cutCalculator, setCutCalculator] = useState(false);
  const handleToggleCalculator = () =>{
    setShowCalculator(false);
  }
  // const submit = () => {
  //   confirmAlert({
  //     title: "Confirm",
  //     message:
  //       "You have 00 : 28 : 44 left. Clicking SUBMIT will end test, and you will not be allowed to attempt any more questions. Are you sure you want to End the test?",
  //     buttons: [
  //       {
  //         label: "Submit",
  //         onClick: () => alert("Click Yes"),
  //       },
  //       {
  //         label: "Cancel",
  //         onClick: () => alert("Click No"),
  //       },
  //     ],
  //   });
  // };
  return (
    // <div className={`${cutCalculator ? "" : "d-none"}`}>
    <div>
      <Draggable>
        <div
          className="ct-calc ct-calc-normal  react-draggable react-draggable-dragged"
          style={{
            transform: "translate(700px, -60px)",
            height: calcMinimize ? "0" : "21rem",
          }}
        >
          <div className="ct-calc-head">
            <div className="ct-calc-title">Normal Calculator</div>
            <div className="ct-calc-actions">
              {calcMinimize ? (
                <i
                  className="fas fa-window-maximize"
                  role="presentation"
                  onClick={() => setCalcMinimize(false)}
                ></i>
              ) : (
                <i
                  className="fas fa-minus"
                  role="presentation"
                  onClick={() => setCalcMinimize(true)}
                ></i>
              )}

              <i
                className="fas fa-times"
                role="presentation"
                onClick={() => handleToggleCalculator()}
              ></i>
            </div>
          </div>
          <div className={`ct-calc-body ${calcMinimize ? "d-none" : ""}`}>
            <iframe
              src="https://kananprep-assets.s3.ap-south-1.amazonaws.com/testengine/calc/normal.html"
              border="0"
              title="calc"
              className="h-100 w-100"
            ></iframe>
          </div>
        </div>
        {/* <button onClick={submit()}>Confirm dialog</button> */}
      </Draggable>
    </div>
  );
};

export default Calculator;
