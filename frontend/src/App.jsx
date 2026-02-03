import React from "react";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./pages/portfolio";

function App() {
  return (
    <div className="bg-[#030712] min-h-screen">
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
