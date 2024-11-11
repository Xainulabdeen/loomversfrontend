import React from "react";
import GridComponent from "../components/Hero";
import Scroll from "../components/Scroll";

export const About = () => {
  return (
    <div className="">
      <GridComponent
        title="About"
        description="Read More Know More"
        btntext="Hover me"
        btnlink="#"
        btnclass=""
      />

      <Scroll />
    </div>
  );
};

export default About;
