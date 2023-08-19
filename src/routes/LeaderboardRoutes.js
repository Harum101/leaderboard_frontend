import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "views/leaderboard/Landing";

const LeaderboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
};

export default LeaderboardRoutes;