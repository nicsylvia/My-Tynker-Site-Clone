import React from "react";
import styled from "styled-components";
import Sponsor from "./Sponsor";
import Hero from "./Hero";
import ParentEdu from "./ParentEdu";
import RatedApps from "./RatedApps";
import First from "./First";
import Question from "./Question";

const Body = () => {
  return (
    <div>
      <Hero />
      <Sponsor />
      <ParentEdu />
      <RatedApps />
      <First />
      <Question />
    </div>
  );
};

export default Body;
