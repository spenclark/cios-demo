import React, { useState } from "react";
import { FooterDiv, ToolTitle, ParentDiv, ToolSubtitle } from "../styles/style";

function CreateLatePaymentEmail() {
  const [data, setData] = useState({
    name: "",
    address: "",  
  })

  const [isEditing, setEditingState] = useState(false)

  function copyToClipboard() {
        
          const e = `Hey ${data.name}, I noticed you were behind on rent this month at ${data.address}. I was wondering if I could be of any assistance. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu erat sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel quam sed risus euismod euismod sed nec ex. Nunc id commodo eros. Mauris vulputate tortor felis, non iaculis lacus pharetra eu. Fusce aliquet vel ex non congue. Etiam porta nibh ac elementum sollicitudin. Nullam dictum accumsan hendrerit. Nam felis ligula, consectetur vitae leo nec, tempus iaculis lorem. In vel tempor nibh. Mauris ac rhoncus turpis.`;
         
        var isIE = /*@cc_on!@*/ false || !!document.documentMode; // checks to see if is internet exporeper
        if (isIE) {
          window.clipboardData.setData("Text", `${e}`);
        } else {
          navigator.clipboard.writeText(`${e}`);
        }
      }


  return (
    <ParentDiv>
      <ToolTitle>Late Rent Email Generator</ToolTitle>
      <ToolSubtitle>Use this to create effective late rent emails</ToolSubtitle>

      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <label>
          Tenant Name
          <input
            placeholder="John Doe"
            onChange={(e) => setData({ ...data, name: e.target.value })}
            value={data.name}
            type="text"
            name="name"
            id="name"
          />
        </label>
        <label>
          Tenant Address
          <input
            placeholder="10 Downing St"
            placeholder="John Doe"
            onChange={(e) => setData({ ...data, address: e.target.value })}
            value={data.address}
            type="text"
            name="address"
            id="address"
          />
        </label>
      </div>

      {!isEditing ? (
        <div style={{ height: "200px", padding: "30px 0" }}>
          <div>
            {`Hey ${data.name},`}
            {`I noticed you were behind on rent this month at ${data.address}. I was wondering if I could be of any assistance. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu erat sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel quam sed risus euismod euismod sed nec ex. Nunc id commodo eros. Mauris vulputate tortor felis, non iaculis lacus pharetra eu. Fusce aliquet vel ex non congue. Etiam porta nibh ac elementum sollicitudin. Nullam dictum accumsan hendrerit. Nam felis ligula, consectetur vitae leo nec, tempus iaculis lorem. In vel tempor nibh. Mauris ac rhoncus turpis.`}
          </div>
        </div>
      ) : (
        <div style={{ height: "200px", padding: "30px 0" }}>Editing</div>
      )}
      <div style={{ display: "flex" }}>
        <button
          style={{
            right: 0,
            margin: "10px 0",
            width: "180px",
            padding: "12px 0",
          }}
          onClick={() => setEditingState(!isEditing)}
        >
          {isEditing ? "Save" : "Make edit"}
        </button>
        <button
          style={{
            right: 0,
            margin: "10px 0",
            width: "180px",
            padding: "12px 0",
            marginLeft: "12px",
          }}
          onClick={() => copyToClipboard()}
        >
          Copy to clipboard
        </button>
      </div>

      <FooterDiv style={{ color: "blue", fontWeight: "600" }}>
        Reduce late rent payments by upto 60%. Learn how.
      </FooterDiv>
    </ParentDiv>
  );
}

export default CreateLatePaymentEmail;
