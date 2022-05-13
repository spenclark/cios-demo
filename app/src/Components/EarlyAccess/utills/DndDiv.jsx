import React, { useState } from "react";

function DndDiv({props}) {
  
  return (
     <div key={props}>
              <div
                style={{
                  display: "flex",
                  padding: "10px 0",
                  flexDirection: "column",
                }}
              >
                <h4>{props.title}</h4>
                <p>{props.subTitle}</p>
              </div>
              {props.options.map((e, i) => {
                return (
                  <div style={{display: "flex", justifyContent: "space-between", padding: "8px 12px", borderRadius: "4px", marginBottom: '8px', background: "#efefef"}}>
                    <div style={{fontWeight: "600"}}>
                      {i}
                    </div>
                    <div>
                      {e.name}
                    </div>
                  </div>
                )
              })}
            </div>

  );
}

export default DndDiv;
