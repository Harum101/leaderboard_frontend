import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
      </Routes>
    </div>
  );
};

export default App;
