import React, { useState } from "react";
import { TextFormField } from "../../ReusableComponents/TextFormField";
import { FormDiv } from "../TenantOnboarding.jsx/styles/styles";
import {
  HeaderDiv,
  HeaderSubtitle,
  HeaderTitle,
  ParentDiv,
} from "./styles/styles";
import { Button } from "@mui/material";
import DndDiv from "./utills/DndDiv";

const formData = [
  {
    title: "Email Address",
    subTitle: "Enter the email you plan to use for your Cios account",
    form: {
      value: "email",
      type: "text",
      multiline: false,
      sm: 12,
      label: "",
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
      label: "",
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
      label: "",
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
      select: true,
      multiline: false,
      sm: 12,
      label: "",
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
      value: "paymentProblem",
      type: "text",
      multiline: false,
      sm: 12,
      label: "",
      select: true,
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
      type: "select",
      multiline: false,
      sm: 12,
      label: "",
      placeholder: "John Doe",
      select: true,
      data: [
        {
          value:
            "Would need to make custom component for a multiselect",
          label:
            "Would need to make custom component for a multiselect",
        },
      ],
    },
  },
];

const dndData = {
  title: "Rank the following goals based on your priority.",
  subTitle: "Most important to least important",
  options: [
    {
      name: "Cash Flow",
    },
    {
      name: "Occupancy Rate",
    },
    {
      name: "Profit Margin",
    },
    {
      name: "Quality of tenant",
    },
  ],
};
function Access() {
  const [data, setData] = useState({
    
  });

  function handleChange(e) {}

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
      <FormDiv>
        {formData.map((e, i) => {
          return (
            <div key={i}>
              <div
                style={{
                  display: "flex",
                  padding: "10px 0",
                  flexDirection: "column",
                }}
              >
                <h4>{e.title}</h4>
                <p>{e.subTitle}</p>
              </div>
              <TextFormField
                sm={e.form.sm}
                label={e.form.label}
                type={e.form.type}
                name={e.form.name}
                select={e.form.select}
                data={e.form.data}
                value={e.form.value}
                placeholder={e.form.placeholder}
                handleChanges={handleChange}
              />
            </div>
          );
        })}

        <DndDiv props={dndData}/>
      </FormDiv>
      <Button
        variant="contained"
        style={{ margin: "10px 0", padding: "10px 0", fontWeight: "600" }}
      >
        Request Access
      </Button>
    </ParentDiv>
  );
}


export default Access;
