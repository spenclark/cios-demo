import React, { useEffect, useState } from "react";
import {
  TenantDiv,
  HeaderDiv,
  HeaderTitle,
  HeaderSubtitle,
  FormTitle,
  FormSubtitle,
  FormDiv,
  CiosDiv,
  VanillaDiv,
  Grid,
  GridRow,
  PaymentDiv,
  RadioDiv,
} from "./styles/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import { TextFormField } from "../../ReusableComponents/TextFormField";

const staticData = {
  header: {
    title: "Welcome to Cios",
    subTitle: "We make it easy and stress-free to pay rent.",
  },
  deposit: 3600.0,
  amount: 1800.0,
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
  formValues: [
    {
      value: "firstName",
      label: "First Name",
      type: "text",
      multiline: false,
      sm: 6,
      placeholder: "John",
      data: [],
    },
    {
      value: "lastName",
      label: "Last Name",
      multiline: false,
      type: "text",
      sm: 6,
      placeholder: "Doe",
      data: [],
    },
    {
      value: "email",
      label: "Email",
      multiline: false,
      type: "email",
      sm: 12,
      placeholder: "john@doe.com",
      data: [],
    },
  ],
};

const bankingFormData = {
  title: "Banking Details",
  subTitle: "This will be saved for future payments",
  formValues: [
    {
      value: "sortCode",
      label: "Sort Code",
      type: "text",
      multiline: false,
      placeholder: "007",
      data: [],
    },
    {
      value: "accountNumber",
      label: "Account Number",
      multiline: false,
      type: "text",
      placeholder: "12314",
      data: [],
    },
    {
      value: "postalCode",
      label: "Postal Code",
      multiline: false,
      type: "text",
      placeholder: "90210",
      data: [],
    },
  ],
};

const ciosData = {
  title: "Payment Options",
  subTitle: "Never worry about late rent payments again.",
};

function TenantOnboarding() {
  useEffect(() => {
    document.title = `Welcome home, ${metaData.firstName}`;
    document.description = `Your payment payment for ${metaData.address}`;
  }, []);

  const handleChange = () => {
    return null;
  };
  return (
    <TenantDiv>
      <HeaderDiv>
        <HeaderTitle>{staticData.header.title}</HeaderTitle>
        <HeaderSubtitle>{staticData.header.subTitle}</HeaderSubtitle>
      </HeaderDiv>
      <FormDiv>
        <FormTitle>{personalFormData.title}</FormTitle>
        <FormSubtitle>{personalFormData.subTitle}</FormSubtitle>
        {personalFormData.formValues.map((e) => {
          return (
            <TextFormField
              sm={e.sm}
              label={e.label}
              type={e.type}
              name={e.name}
              select={e.select}
              data={e.data}
              value={e.value}
              handleChanges={handleChange}
            />
          );
        })}
      </FormDiv>
      <FormDiv>
        <FormTitle>{bankingFormData.title}</FormTitle>
        <FormSubtitle>{bankingFormData.subTitle}</FormSubtitle>
        {bankingFormData.formValues.map((e) => {
          return (
            <TextFormField
              sm={e.sm}
              label={e.label}
              type={e.type}
              name={e.name}
              select={e.select}
              data={e.data}
              value={e.value}
              handleChanges={handleChange}
            />
          );
        })}
      </FormDiv>
      <PaymentDiv>
        <FormTitle>{ciosData.title}</FormTitle>
        <FormSubtitle>{ciosData.subTitle}</FormSubtitle>

        <VanillaDiv
          style={{
            margin: "12px 0",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          Standard
          <VanillaDiv>
            <RadioDiv>
              <Radio
                style={{ display: "flex", justifyContent: "flex-start" }}
              />
            </RadioDiv>
            <Grid>
              <GridRow>
                <div style={{ width: "50%" }}>Deposit</div>
                <div style={{ width: "50%", textAlign: "end" }}>
                  {staticData.deposit}.00
                </div>
              </GridRow>
              <GridRow>
                <div style={{ width: "50%" }}>Rent for this month</div>
                <div style={{ width: "50%", textAlign: "end" }}>
                  {staticData.amount}.00
                </div>
              </GridRow>
              <GridRow
                style={{
                  padding: "2px 0",
                  borderBottom: "none",
                }}
              >
                <div style={{ width: "50%", fontWeight: "600" }}>
                  Total due today
                </div>
                <div
                  style={{ width: "50%", fontWeight: "600", textAlign: "end" }}
                >
                  {staticData.amount + staticData.amount}.00
                </div>
              </GridRow>
            </Grid>
          </VanillaDiv>
        </VanillaDiv>
        <CiosDiv style={{ flexDirection: "column", alignItems: "flex-start" }}>
          Cios Assistance
          <CiosDiv>
            <RadioDiv>
              <Radio
                style={{ display: "flex", justifyContent: "flex-start" }}
              />
            </RadioDiv>
            <div style={{ fontWeight: "600" }}>
              Lorem Ipsum Finance $50/week
            </div>
          </CiosDiv>
        </CiosDiv>
      </PaymentDiv>
      <Button
        variant="contained"
        style={{ margin: "30px 0", padding: "10px 0", fontWeight: "600" }}
      >
        Review Payment
      </Button>
    </TenantDiv>
  );
}

export default TenantOnboarding;
