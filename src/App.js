import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

//Component Imports
import DemoNavbar from "components/DemoNavbar";
import Sidebar from "components/Sidebar";
import Footer from "components/Footer";
import Dashboard from "views/Dashboard";
import Forms from "views/Forms";
import UpdateUser from "views/UpdateUser";

const App = () => {
  const mainPanel = React.useRef();
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Sidebar />
        <div className="main-panel" ref={mainPanel}>
          <DemoNavbar /> {/*{...props}*/}
          <Routes>
            <Route path="/admin/updateuser/:id" Component={UpdateUser} />
            <Route path="/admin/dashboard" Component={Dashboard} />
            <Route path="/admin/forms" Component={Forms} />
            <Route
              path="/"
              element={<Navigate to="/admin/dashboard" replace />}
            />
          </Routes>
          <Footer fluid />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
