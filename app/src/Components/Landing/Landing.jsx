import React from "react";
import Hero from "./Hero";
import AccessCard from "./AccessCard";
import TenantFlowCard from "./TenantFlowCard";
import ToolCard from "./ToolCard";
import { LandingDiv } from "./styles/styles";
import OrgLandingCard from "./OrgLandingCard";
import RepoCards from "./RepoCards";
import EmbedCard from "./EmbedCard";


function Landing() {
  return (
    <LandingDiv>
      <Hero />
      <TenantFlowCard />
      <ToolCard />
      <AccessCard />
      <OrgLandingCard />
      <EmbedCard />
      <RepoCards />
    </LandingDiv>
  );
}

export default Landing;
