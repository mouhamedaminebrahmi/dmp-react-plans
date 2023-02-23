import React, { useState } from "react";
import FirstStep from "./steps/FirstStep";
import SecondStep from "./steps/SecondStep";

function Main() {
  const [firstStep, setfirstStep] = useState(true);
  const [secondStep, setsecondStep] = useState(false);

  const handleNextStep = () => {
    setfirstStep(!firstStep);
    setsecondStep(!secondStep);
  };

  return (
    <div className="main">
      <div className="card-articles">
        {firstStep && <FirstStep handleNextStep={handleNextStep}></FirstStep>}
        {secondStep && <SecondStep handleNextStep={handleNextStep}></SecondStep>}
      </div>
    </div>
  );
}

export default Main;
