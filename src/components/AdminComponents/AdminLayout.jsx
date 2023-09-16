import React from "react";
import DemoNavbar from "components/DemoNavbar";
import Sidebar from "components/Sidebar";
import Footer from "components/Footer";

const AdminLayout = ({ children }) => (
  <div className="wrapper">
    <Sidebar />
    <div className="main-panel">
      <DemoNavbar />
      {children}
      <Footer fluid />
    </div>
  </div>
);

export default AdminLayout;
