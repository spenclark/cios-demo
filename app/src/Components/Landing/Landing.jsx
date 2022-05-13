import React from "react";
import Hero from "./Hero";
import AccessCard from "./AccessCard";
import TenantFlowCard from "./TenantFlowCard";
import IndexCard from "./IndexCard";
import { LandingDiv } from "./styles/styles";
import OrgLandingCard from "./OrgLandingCard";
import RepoCards from "./RepoCards";


function Landing() {
  return (
    <LandingDiv>
      <Hero />
      <TenantFlowCard />
      <IndexCard />
      <AccessCard />
      <OrgLandingCard />
      <RepoCards />
    </LandingDiv>
  );
}

export default Landing;
