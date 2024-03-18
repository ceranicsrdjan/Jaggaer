import React from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
