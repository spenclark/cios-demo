import React from "react";
import {
  ContentCard,
  TitleDiv,
  ContentSubtitle,
  ContentTitle,
} from "./styles/styles";

function RepoCards() {
  return (
    <>
      <ContentCard>
        <TitleDiv>
          <ContentSubtitle>
            <a target="_blank" href="https://github.com/spenclark/cios-demo">
              Front-End Repo
            </a>
          </ContentSubtitle>
          <ContentSubtitle>
            <a target="_blank" href="https://github.com/spenclark/cios-demo">
              Back-End Repo
            </a>
          </ContentSubtitle>
        </TitleDiv>
      </ContentCard>
    </>
  );
}

export default RepoCards;
