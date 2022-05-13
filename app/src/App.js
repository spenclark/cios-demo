import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import TenantOnboarding from "./Components/TenantOnboarding.jsx/TenantOnboarding";
import Tools from "./Components/Tools/Tools";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/n/401-21-Seasme-St" element={<TenantOnboarding />} />
      <Route path="/tools" element={<Tools />} />
    </Routes>
  );
}

export default App;
