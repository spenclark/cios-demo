import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;
