import React from "react";
import {
  ContentCard,
  TitleDiv,
  ContentSubtitle,
  ContentTitle,
} from "./styles/styles";

function IndexCard() {
  return (
    <ContentCard>
      <TitleDiv>
        <ContentTitle>
          Landlord Tools{" "}
          <a
            style={{
              color: "blue",
              textDecoration: "none",
              fontSize: "12px",
            }}
            target="_blank"
            href="https://cios-demo.netlify.app/tools"
          >
            /tools
          </a>
        </ContentTitle>
        <ContentSubtitle>
          Designed as a growth feature. Intent is to build a set of tools,
          information and diagnoses.
        </ContentSubtitle>
      </TitleDiv>
    </ContentCard>
  );
}

export default IndexCard;
