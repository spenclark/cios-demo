import React from "react";

const techData = ["ReactJS", "Material-UI", "NodeJS", "Postgres", "Express"];
function Hero() {
  return (
    <div
      style={{ padding: "20px", borderRadius: "7px", background: "#efefef" }}
    >
      <h1 style={{ fontSize: "38px" }}>Hello Cios,</h1>
      <p style={{ margin: "8px 0 16px", fontSize: "18px" }}>These are just
        representations of my ideas are not exaustive. With work can be moved to production. Enjoy :)
      </p>
      <div>
        <h3>Tech Stack</h3>
        <div style={{ margin: "6px 0 0", display: "flex", flexWrap: "wrap" }}>
          {techData.map((e, i) => {
            return (
              <p
                key={i}
                style={{
                  background: "black",
                  fontSize: "12px",
                  color: "white",
                  fontWeight: "600",
                  padding: "4px 9px",
                  borderRadius: "12px",
                  margin: "0 6px 6px 0px",
                }}
              >
                {e}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Hero;
