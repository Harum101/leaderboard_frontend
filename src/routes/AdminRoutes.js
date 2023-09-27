import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "views/admin/Dashboard";
import Forms from "views/admin/Forms";
import Hackathon from "views/admin/Hackathon";
import UpdateUser from "views/admin/UpdateUser";
import AdminLayout from "components/AdminComponents/AdminLayout";

const AdminRoutes = () => {
  // const mainPanel = React.useRef();

  return (
    <Routes>
      <Route
        path="/admin/updateuser/:id"
        element={
          <AdminLayout>
            <UpdateUser />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/dashboard"
        element={
          <AdminLayout>
            <Dashboard />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/forms"
        element={
          <AdminLayout>
            <Forms />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/hackathon"
        element={
          <AdminLayout>
            <Hackathon />
          </AdminLayout>
        }
      />
      <Route
        path="/admin"
        element={<Navigate to="/admin/dashboard" replace />}
      />
    </Routes>
  );
};

export default AdminRoutes;
