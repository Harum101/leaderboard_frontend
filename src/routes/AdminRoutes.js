import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "views/admin/Dashboard";
import Forms from "views/admin/Forms";
import UpdateUser from "views/admin/UpdateUser";
import DemoNavbar from "components/DemoNavbar";
import Sidebar from "components/Sidebar";
import Footer from "components/Footer";

const AdminRoutes = () => {
  const mainPanel = React.useRef();

  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main-panel" ref={mainPanel}>
        <DemoNavbar />
        <Routes>
          <Route path="/admin/updateuser/:id" element={<UpdateUser />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/forms" element={<Forms />} />
          <Route
            path="/admin"
            element={<Navigate to="/admin/dashboard" replace />}
          />
        </Routes>
        <Footer fluid />
      </div>
    </div>
  );
};

export default AdminRoutes;
