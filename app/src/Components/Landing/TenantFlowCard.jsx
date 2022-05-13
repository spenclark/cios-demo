import React from "react";
import { ReactTinyLink } from "react-tiny-link";
import { ContentCard, TitleDiv, ContentSubtitle, ContentTitle } from "./styles/styles";

function TenantFlowCard() {
  return (
    <ContentCard>
      <TitleDiv>
        <ContentTitle>Tenant Onboarding</ContentTitle>
        <ContentSubtitle>
          Tenant onboarding link from landlord. Dynamic rendering. Collect
          tenant information and upsells lending products.
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
