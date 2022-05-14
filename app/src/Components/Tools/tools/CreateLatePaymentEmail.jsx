import React, { useState, useEffect } from "react";
import { FooterDiv, ToolTitle, ParentDiv, ToolSubtitle } from "../styles/style";

function CreateLatePaymentEmail() {
  const [data, setData] = useState({
    name: "",
    address: "",
    email:
     ``,
  });

  useEffect(() => {
    setData({...data, email: `Hey ${data.name}, I noticed you were behind on rent this month at ${data.address}. I was wondering if I could be of any assistance. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu erat sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel quam sed risus euismod euismod sed nec ex. Nunc id commodo eros. Mauris vulputate tortor felis, non iaculis lacus pharetra eu. Fusce aliquet vel ex non congue. Etiam porta nibh ac elementum sollicitudin. Nullam dictum accumsan hendrerit. Nam felis ligula, consectetur vitae leo nec, tempus iaculis lorem. In vel tempor nibh. Mauris ac rhoncus turpis.`})
    
  }, [data.name, data.address])
const container = document.getElementById("base");

  const [isEditing, setEditingState] = useState(false)

  function copyToClipboard() {
        const e = data.email
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
          <div id="base">
            {data.email}
          </div>
        </div>
      ) : (
        <div style={{ height: "200px", padding: "30px 0" }}>
          <textarea
        
               name="editForm"
            style={{fontSize: "16px"}}
            value={data.email}
            onChange={(e) => {setData({ ...data, email: e.target.value })}}
             id="editForm"
       
                rows="8"
    
                   cols="80"
         
          />
        </div>
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
