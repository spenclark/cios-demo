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
          <ContentTitle>
            Early Access Form{"  "}{" "}
            <a
              style={{
                color: "blue",
                textDecoration: "none",
                fontSize: "12px",
              }}
              target="_blank"
              href="/access"
            >
              /access
            </a>
          </ContentTitle>
          <ContentSubtitle>
            Cios deserves its own onboarding flow. No more typeform.
          </ContentSubtitle>
        </TitleDiv>
      </ContentCard>
    );
}

export default AccessCard
