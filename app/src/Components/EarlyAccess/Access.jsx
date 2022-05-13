import React, { useState } from "react";
import { FormDiv } from "../TenantOnboarding.jsx/styles/styles";
import {
  HeaderDiv,
  HeaderSubtitle,
  HeaderTitle,
  ParentDiv,
} from "./styles/styles";

const formData = [
  {
    title: "Email Address",
    subTitle: "Enter the email you plan to use for your Cios account",
    form: {},
  },
  {
    title: "What should we call you?",
    subTitle: "First and last name, please.",
    form: {},
  },
  {
    title: "How many rental units do you own or manage?",
    subTitle:
     
     
      "Each rental unit would have its own lease agreement with tenant(s).",
    form: {},
  },
  {
    title: "What describes your role best?",
    subTitle: "Choose one option only",
    form: {},
  },
  {
    title: "",
    subTitle: "",
    form: {},
  },
  {
    title: "",
    subTitle: "",
    form: {},
  },
  {
    title: "",
    subTitle: "",
    form: {},
  },
];

function Access() {
  const [data, setData] = useState({
    
  });

  function onChange(e) {}

  const submitValue = () => {
    const data = {};
    console.log(data);
  };
  return (
    <ParentDiv>
      <HeaderDiv>
        <HeaderTitle>Get early access to Cios</HeaderTitle>
        <HeaderSubtitle>Cios is the new OS for renting.</HeaderSubtitle>
      </HeaderDiv>
      <FormDiv></FormDiv>
    </ParentDiv>
  );
}

export default Access;
