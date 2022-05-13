import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import TenantOnboarding from "./Components/TenantOnboarding.jsx/TenantOnboarding";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/n/1" element={<TenantOnboarding />} />
    </Routes>
  );
}

export default App;
