import React, { useEffect } from "react";
import {
  TenantDiv,
  HeaderDiv,
  HeaderTitle,
  HeaderSubtitle,
  FormTitle,
  FormSubtitle,
  FormDiv,
  CiosDiv,
  CiosTitle,
  CiosSubtitle,
  CiosButton
} from "./styles/styles";
import TextField from "@mui/material/TextField";

const staticData = {
  header: {
    title: "Welcome to Cios",
    subTitle: "We make it easy and stress-free to pay rent.",
  },
  deposit: 3600.00,
  amount: 1800.00
};

const metaData = {
  // Would come from get API on prod
  firstName: "John",
  lastName: "Doe",
  address: "401-21 Seasme St",
};

const personalFormData = {
  title: "Personal Info",
  subTitle: "Fill out your personal information",
};

const bankingFormData = {
  title: "Banking Details",
  subTitle: "This will be saved for future payments",
};

const ciosData = {
  title: "",
  subTitle: "Never m",
  btnName: ""
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
      </FormDiv>
      <FormDiv>
        <FormTitle>{bankingFormData.title}</FormTitle>
        <FormSubtitle>{bankingFormData.subTitle}</FormSubtitle>
      </FormDiv>
      <CiosDiv>
        <CiosTitle>
          {ciosData.title}
        </CiosTitle>
        <CiosSubtitle>
          
        </CiosSubtitle>
        <CiosButton>
          
        </CiosButton>
      </CiosDiv>
    </TenantDiv>
  );
}

export default TenantOnboarding;
