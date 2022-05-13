import React from "react";
import {
  ContentCard,
  TitleDiv,
  ContentSubtitle,
  ContentTitle,
} from "./styles/styles";

function EmbedCard() {
  return (
    <ContentCard>
      <TitleDiv>
        <ContentTitle>Recorded walk-through</ContentTitle>
        <ContentSubtitle></ContentSubtitle>
        <iframe
          width="620"
          height="388"
          src="https://www.loom.com/embed/e69d41f19f3340bdbd4ab8d9dc705526"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
      </TitleDiv>
    </ContentCard>
  );
}

export default EmbedCard;
