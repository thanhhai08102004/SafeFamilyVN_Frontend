import React from "react";
import SecureAndSafe from "./SecureAndSafe";
import Helper from "./Helper";
import DigitalSafety from "./DigitalSafety";
import StepToSafe from "./StepToSafe";

function HomePage() {
  return (
    <>
      <div className="bg-gray-200 p-10">
        <SecureAndSafe />
        <Helper />
      </div>
      <StepToSafe />
      <DigitalSafety />
    </>
  );
}

export default HomePage;
