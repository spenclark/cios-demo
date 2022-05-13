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
        <ContentTitle>Problem Index</ContentTitle>
        <ContentSubtitle>
          Designed this a growth feature. Intent is to build a set of tools,
          information and diagnoses.
        </ContentSubtitle>
      </TitleDiv>
    </ContentCard>
  );
}

export default IndexCard;
