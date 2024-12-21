import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<>teste about</>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
