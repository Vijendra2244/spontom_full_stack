import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddPatients from "../pages/AddPatients";
import Logout from "../pages/Logout";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddPatients />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route  path="/logout" element={<Logout/>} />
      </Routes>
    </>
  );
}

export default AllRoutes;
