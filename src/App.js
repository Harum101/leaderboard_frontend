import React from "react";
import { BrowserRouter } from "react-router-dom";

import AdminRoutes from "routes/AdminRoutes"; // Import admin routes
import LeaderboardRoutes from "routes/LeaderboardRoutes"; // Import leaderboard routes

const App = () => {
  const isAdminRoute = (pathname) => {
    return pathname.startsWith("/admin");
  };

  return (
    <BrowserRouter>
      <LeaderboardRoutes /> {/* Render leaderboard routes */}
      {isAdminRoute(window.location.pathname) && <AdminRoutes />}{" "}
      {/* Render admin routes */}
    </BrowserRouter>
  );
};

export default App;
