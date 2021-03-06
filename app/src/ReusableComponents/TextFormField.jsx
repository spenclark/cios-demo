import React from "react";
import { Grid, MenuItem, TextField } from "@mui/material";

export const TextFormField = (props) => {
  return (
    <Grid item xs={12} sm={props.sm}>
      <TextField
        fullWidth
        style={{ margin: "10px 0" }}
        select={props.select}
        multiline={props.multiline}
        rows={props.rows}
        variant={props.variant}
        label={props.label}
        type={props.type}
        name={props.name}
        placeholder={props.label}
        InputLabelProps={props.inputLabel}
        value={props.value[props.name]}
        onChange={props.handleChanges}
      >
        {props.data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Grid>
  );
};
