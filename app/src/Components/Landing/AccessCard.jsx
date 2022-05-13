import React from 'react'
import {
  ContentCard,
  TitleDiv,
  ContentSubtitle,
  ContentTitle,
} from "./styles/styles";

function AccessCard() {
    return (
          <ContentCard>
      <TitleDiv>
        <ContentTitle>In-house onboarding{"  "} <a
              style={{
                color: "blue",
                textDecoration: "none",
                fontSize: "12px",
              }}
              href="https://cios-demo.netlify.app/access"
            >
              /access
            </a></ContentTitle>
        <ContentSubtitle>
              Cios deserves its own onboarding flow. Backend code included.
        </ContentSubtitle>
      </TitleDiv>
  
    </ContentCard>
    

    );
}

export default AccessCard
