import React from "react";
import Hero from "./Hero";
import AccessCard from "./AccessCard";
import BlogCard from "./BlogCard";
import TenantFlowCard from "./TenantFlowCard";

function Landing() {
  return (
    <div>
      <Hero />
      <TenantFlowCard />
      <BlogCard />
      <AccessCard />
    </div>
  );
}

export default Landing;
