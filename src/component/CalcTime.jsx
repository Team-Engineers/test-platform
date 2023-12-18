import React, { useState, useEffect } from "react";
import Calculator from "./calculator/Calculator"; // Import your Calculator component

const CalcTime = () => {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // Initial time in seconds
  const [showCalculator, setShowCalculator] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          setShowCalculator(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCalcClick = () => {
    setShowCalculator(true);
  };

  return (
    <div className="left-bk">
      <div className="timerblock hidden-mobile">
        <b>
          <span>Time Left: </span>
          <span id="timer">
            <span>{String(Math.floor(timeLeft / 60)).padStart(2, "0")}</span>:
            <span>{String(timeLeft % 60).padStart(2, "0")}</span>
          </span>
        </b>
      </div>
      <div className="calc-btn" role="presentation" onClick={handleCalcClick}>
        <img
          src="https://campusquizkybv.blob.core.windows.net/company-profiles/635498283615262893_6878091.png"
          alt="calcbtn"
        />
      </div>
      {showCalculator && <Calculator />}
    </div>
  );
};

export default CalcTime;
