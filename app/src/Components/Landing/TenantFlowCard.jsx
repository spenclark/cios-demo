import React from "react";
import { ReactTinyLink } from "react-tiny-link";
import { ContentCard, TitleDiv, ContentSubtitle, ContentTitle } from "./styles/styles";

function TenantFlowCard() {
  return (
    <ContentCard>
      <TitleDiv>
        <ContentTitle>Tenant Onboarding</ContentTitle>
        <ContentSubtitle>
          Sample tenant onboarding link. Dynamic Renderin. This UX flow is extremely important for both landlords and tenants. 
        </ContentSubtitle>
      </TitleDiv>
      <ReactTinyLink
        cardSize="small"
        showGraphic={true}
        maxLine={1}
        minLine={1}
        url="https://cios-demo.netlify.app"
      />
    </ContentCard>
  );
}

export default TenantFlowCard;
