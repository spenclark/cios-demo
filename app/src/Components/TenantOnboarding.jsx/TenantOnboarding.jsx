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
};

const bankingFormData = {
  title: "Banking Details",
  subTitle: "This will be saved for future payments",
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

  return (
    <TenantDiv>
      <HeaderDiv>
        <HeaderTitle>{staticData.header.title}</HeaderTitle>
        <HeaderSubtitle>{staticData.header.subTitle}</HeaderSubtitle>
      </HeaderDiv>
      <FormDiv>
        <FormTitle>{personalFormData.title}</FormTitle>
        <FormSubtitle>{personalFormData.subTitle}</FormSubtitle>
        <TextField
          required
          style={{       margin: "10px 0"       }}
          id="outlined-required"
          label="First Name"
          placeholder="John"
        />
        <TextField
          required
          style={{       margin: "10px 0"       }}
          id="outlined-required"
          label="Last Name"
          placeholder="Doe"
        />
        <TextField
          required
          style={{       margin: "10px 0"       }}
          id="outlined-required"
          label="Email"
          placeholder="johndoe@email.com"
        />
      </FormDiv>
      <FormDiv>
        <FormTitle>{bankingFormData.title}</FormTitle>
        <FormSubtitle>{bankingFormData.subTitle}</FormSubtitle>
        <TextField
          required
          style={{       margin: "10px 0"       }}
          id="outlined-required"
          label="Sort Code"
          placeholder="007"
        />
        <TextField
          required
          style={{       margin: "10px 0"       }}
          id="outlined-required"
          label="Account Number"
          placeholder="12314"
        />
        <TextField
          required
          style={{       margin: "10px 0"       }}
          id="outlined-required"
          label="Postal Code"
          placeholder="90210"
        />
      </FormDiv>
      <PaymentDiv>
        <FormTitle>{ciosData.title}</FormTitle>
        <FormSubtitle>{ciosData.subTitle}</FormSubtitle>

        <div style={{ margin: "12px 0" }}>
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
        </div>
        <div>
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
        </div>
      </PaymentDiv>
      <Button
        variant="contained"
        style={{ margin: "30px 0", fontWeight: "600" }}
      >
        Review Payment
      </Button>
    </TenantDiv>
  );
}

export default TenantOnboarding;
