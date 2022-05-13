import React from "react";
import {
  HeaderDiv,
  HeaderSubtitle,
  HeaderTitle,
  ParentDiv,
} from "../TenantOnboarding.jsx/styles/styles";

const formData = [
  {
    title: "",
    subTitle: "",
    form: {},
  },
];

function Access() {
  return (
    <ParentDiv>
      <HeaderDiv>
        <HeaderTitle>Get early access to Cios</HeaderTitle>
        <HeaderSubtitle>Cios is the new OS for renting.</HeaderSubtitle>
      </HeaderDiv>
    </ParentDiv>
  );
}

export default Access;
