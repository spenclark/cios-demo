import React, { useState } from "react";
import { TextFormField } from "../../ReusableComponents/TextFormField";
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
    form: {
      value: "email",
      type: "text",
      multiline: false,
      sm: 12,
      placeholder: "john@doe.com",
      data: [],
    },
  },
  {
    title: "What should we call you?",
    subTitle: "First and last name, please.",
    form: {
      value: "name",
      type: "text",
      multiline: false,
      sm: 12,
      placeholder: "John Doe",
      data: [],
    },
  },
  {
    title: "How many rental units do you own or manage?",
    subTitle:
      "Each rental unit would have its own lease agreement with tenant(s).",
    form: {
      value: "rentalNumber",
      type: "text",
      multiline: false,
      sm: 12,
      placeholder: "3",
      data: [],
    },
  },
  {
    title: "What describes your role best?",
    subTitle: "Choose one option only",
    form: {
      value: "role",
      type: "text",
      multiline: false,
      sm: 12,
      data: [
        {
          value: "Almost every month",
          label: "Almost every month",
        },
        {
          value: "Every other month",
          label: "Every other month",
        },
        {
          value: "3-4 times a year",
          label: "3-4 times a year",
        },
        {
          value: "1-2 times a year",
          label: "1-2 times a year",
        },
        {
          value: "Almost never",
          label: "Almost never",
        },
      ],
    },
  },
  {
    title: "How frequently do you receive rent or utility payments late?",
    subTitle: "Take your best estimate across all your properties.",
    form: {
      value: "name",
      type: "text",
      multiline: false,
      sm: 12,
      placeholder: "John Doe",
      data: [
        {
          value: "Full time landlord",
          label: "Full time landlord",
        },
        {
          value: "Part time landlord",
          label: "Part time landlord",
        },
        {
          value: "Real estate agent",
          label: "Real estate agent",
        },
        {
          value: "Property Management",
          label: "Property Management",
        },
        {
          value: "Tenant",
          label: "Tenant",
        },
        {
          value: "Other",
          label: "Other",
        },
      ],
    },
  },
  {
    title: "Which payment methods do you currently use for rent?",
    subTitle: "Choose all that apply to you.",
    form: {
      value: "name",
      type: "text",
      multiline: false,
      sm: 12,
      placeholder: "John Doe",
      data: [
        {
          value:












                                                                                                                                                "In practice I would make a custom compnent for this (dont have time to now)",
          label:

           
           
            "In practice I would make a custom compnent for this (dont have time to now)",
        },
      ],
    },
  },
  // {
  //   title: "Rank the following goals based on your priority.",
  //   subTitle: "Most important to least important",
  //   form: {
  //     value: "name",
  //     type: "text",
  //     multiline: false,
  //     sm: 12,
  //     placeholder: "John Doe",
  //     data: [],
  //   },
  // },
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
      <FormDiv>{formData.map((e) => {
        return (
          <TextFormField>
            
          </TextFormField>
        )
      })}</FormDiv>
    </ParentDiv>
  );
}


export default Access;
