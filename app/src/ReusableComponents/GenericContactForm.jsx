import TextFormField from "./TextFormField";
import React, { useState } from "react";
import { Button } from "@mui/material";

const formData = [
  {
    value: "name",
    label: "Name",
    type: "text",
    multiline: false,
    sm: 12,
    placeholder: "John Doe",
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
];

function GenericContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const handleChange = () => {};
  const handleSubmit = () => {
    // Axios post
  };

  return (
    <>
      <TextFormField>
        {formData.map((e) => {
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
      </TextFormField>
      <Button onClick={() => handleSubmit()}>Submit</Button>
    </>
  );
}

export default GenericContactForm;
