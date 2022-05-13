import React from "react";
import {
  HeroDiv,
  HeroTitle,
  HeroSubtitle,
  LandingDiv,
  HeroImg,
  ButtonDiv,
  TrustedBar,
  LearnButton,
  ContactButton,
  TrustedIcon,
} from "./styles/styles";

function Association() {
  return (
    <LandingDiv>
      <HeroDiv>
        <HeroTitle>
          Reduce late payments for your landlords by upto 60%
        </HeroTitle>
        <HeroSubtitle>
          Cios saves landlords by extending tenant friendly bridge fiancing to
          help tenats. No more awkward converstaions and late payments.
        </HeroSubtitle>
        <ButtonDiv>
          <ContactButton>Contact Us</ContactButton>
          <LearnButton>Learn More</LearnButton>
        </ButtonDiv>
        <HeroImg src="demo.svg"></HeroImg>
      </HeroDiv>
      <div
        style={{ fontSize: "28px", fontWeight: "600", margin: "50px 0 18px" }}
      >
        Trusted By
      </div>
      <TrustedBar>
        <TrustedIcon src="https://pbs.twimg.com/profile_images/1085267065747861504/vi3PuTRS_400x400.jpg"></TrustedIcon>
        <TrustedIcon src="data:image/png;base64,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"></TrustedIcon>
        <TrustedIcon src="https://cfaa-fcapi.org/wp-content/uploads/CFAA-Logo-Large-High-Res-2-300x981-2.png" />
      </TrustedBar>
    </LandingDiv>
  );
}

export default Association;
