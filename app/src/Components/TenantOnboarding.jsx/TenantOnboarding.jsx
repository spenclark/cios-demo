import React, { useEffect } from "react";
import {
  TenantDiv,
  HeaderDiv,
  HeaderTitle,
  HeaderSubtitle,
  FormTitle,
  FormSubtitle,
  FormDiv,
} from "./styles/styles";
import TextField from "@mui/material/TextField";

const staticData = {
  header: {
    title: "Welcome to Cios",
    subTitle: "We make it easy and stress-free to pay rent.",
  },
};

const metaData = {
  // Would come from get API on prod
  firstName: "John",
  lastName: "Doe",
  address: "21 Seasme St",
};

const personalFormData = {
  title: "Personal Info",
  subTitle: "Fill out your personal information",
};

const bankingFormData = {
  title: "Banking Details",
  subTitle: "This will be saved for future payments",
};
function TenantOnboarding() {
  useEffect(() => {
    document.title = `Welcome home, ${metaData.firstName}`;
    document.description = `Your payment payment for ${metaData.address}`;
  }, []);

  return (
    <TenantDiv>
      <HeaderDiv>
        <HeaderTitle>{staticData.header.title}</HeaderTitle>
        <HeaderSubtitle>{staticData.header.subTitle}</HeaderSubtitle>
      </HeaderDiv>
      <FormDiv>
        <FormTitle>{personalFormData.title}</FormTitle>
        <FormSubtitle>{personalFormData.subTitle}</FormSubtitle>
        <div></div>
      </FormDiv>
    </TenantDiv>
  );
}

export default TenantOnboarding;
