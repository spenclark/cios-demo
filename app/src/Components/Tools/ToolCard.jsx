import React from "react";
import { ParentDiv, ToolSubtitle, ToolTitle } from "./styles/style";

function ToolCard({ props }) {
  return (
    <a href={`${props.ref}`}>
      <div
        style={{
          border: "1px solid black",
          padding: "10px ",
          maxWidth: "300px",
        }}
      >
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
      </div>
    </a>
  );
}

export default ToolCard;
