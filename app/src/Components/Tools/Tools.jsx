import React from "react";
import {
  HeaderDiv,
  HeaderSubtitle,
  HeaderTitle,
  ToolDiv,
  ToolContainer,
} from "./styles/style";
import ToolCard from "./ToolCard";
import CreateLatePaymentEmail from "./tools/CreateLatePaymentEmail";
function Tools() {
  return (
    <ToolDiv>
      <HeaderDiv>
        <HeaderTitle>Try our free landlord tools</HeaderTitle>
        <HeaderSubtitle>
          Here are some tools we made to help landlords save time and money
        </HeaderSubtitle>
      </HeaderDiv>
      <ToolContainer>
        <ToolCard
          props={{
            ref: "/tools/laterentemail",
            name: "Late Rent Email Generator",
            desc: "Craft an email that gets tenants to pay rent",
          }}
        />
      </ToolContainer>
    </ToolDiv>
  );
}

export default Tools;
