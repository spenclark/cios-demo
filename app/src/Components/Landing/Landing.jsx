import React from "react";
import Hero from "./Hero";
import AccessCard from "./AccessCard";
import TenantFlowCard from "./TenantFlowCard";
import IndexCard from "./IndexCard";
import { LandingDiv } from "./styles/styles";

function Landing() {
  return (
    <LandingDiv>
      <Hero />
      <TenantFlowCard />
      <IndexCard />
      <AccessCard />
    </LandingDiv>
  );
}

export default Landing;
