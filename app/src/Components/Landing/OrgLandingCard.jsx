import React from "react";
import {
  ContentCard,
  TitleDiv,
  ContentSubtitle,
  ContentTitle,
} from "./styles/styles";

function OrgLandingCard() {
  return (
    <ContentCard>
      <TitleDiv>
        <ContentTitle>
          Landlord Association Page{" "}
          <a
            style={{
              color: "blue",
              textDecoration: "none",
              fontSize: "12px",
            }}
            target="_blank"
            href="https://cios-demo.netlify.app/association"
          >
            /association
          </a>
        </ContentTitle>
        <ContentSubtitle>
          Marketing Page for Landlord associations. If this is a primary
          distribution channel it deserves its own channel.
        </ContentSubtitle>
      </TitleDiv>
    </ContentCard>
  );
}

export default OrgLandingCard;
