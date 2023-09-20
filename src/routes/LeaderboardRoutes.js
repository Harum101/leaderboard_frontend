import React from "react";
import { Route, Routes } from "react-router-dom";
import DevShowcase from "views/leaderboard/DevShowcase";
import Landing from "views/leaderboard/Landing";
import Login from "views/leaderboard/Login";
import Pricing from "views/leaderboard/Pricing";
import Register from "views/leaderboard/Register";
import Verification from "views/leaderboard/Verfication";

const LeaderboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/authCom/:id/verify/:token" element={<Verification />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/devshowcase" element={<DevShowcase />} />
    </Routes>
  );
};

export default LeaderboardRoutes;
