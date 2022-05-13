import React from "react";
import { Route, Routes } from "react-router-dom";
import Access from "./Components/EarlyAccess/Access";
import Landing from "./Components/Landing/Landing";
import TenantOnboarding from "./Components/TenantOnboarding.jsx/TenantOnboarding";
import Tools from "./Components/Tools/Tools";
import CreateLatePaymentEmail from "./Components/Tools/tools/CreateLatePaymentEmail";
import Association from "./Components/Association/Association";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/n/401-21-Seasme-St" element={<TenantOnboarding />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/tools/laterentemail" element={<CreateLatePaymentEmail />} />
      <Route path="/access" element={<Access />} />
      <Route path="/associations" element={<Association />} />
    </Routes>
  );
}

export default App;
