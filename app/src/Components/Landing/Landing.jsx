import React from "react";
import Hero from "./Hero";
import AccessCard from "./AccessCard";
import TenantFlowCard from "./TenantFlowCard";
import { LandingDiv } from "./styles/styles";

function Landing() {
  return (
    <LandingDiv>
      <Hero />
      <TenantFlowCard />
      <AccessCard />
    </LandingDiv>
  );
}

export default Landing;
