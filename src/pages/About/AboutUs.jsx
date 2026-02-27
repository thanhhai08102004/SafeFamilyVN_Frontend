import React from "react";
import Mission from "./Mission";
import Why from "./Why";
import Impact from "./Impact";
import CoreValue from "./CoreValue";
import Ready from "./Ready";

function AboutUs() {
  return (
    <div className="bg-gray-50">
      <Mission />
      <Why />
      <Impact />
      <CoreValue />
      <Ready />
    </div>
  );
}

export default AboutUs;
