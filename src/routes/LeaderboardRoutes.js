import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "views/leaderboard/Landing";
import Login from "views/leaderboard/Login";
import Register from "views/leaderboard/Register";

const LeaderboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default LeaderboardRoutes;
