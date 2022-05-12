import React from "react";
import Hero from "./Hero";
import AccessCard from "./AccessCard";
import BlogCard from "./BlogCard";
import TenantFlowCard from "./TenantFlowCard";
import { landingStyles } from "./styles/styles";

function Landing() {
  const classes = landingStyles();
  return (
    <div className={classes.root}>
      <Hero />
      <TenantFlowCard />
      <BlogCard />
      <AccessCard />
    </div>
  );
}

export default Landing;
