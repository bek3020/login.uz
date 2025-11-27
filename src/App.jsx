import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<SingUp />} />
    </Routes>
  );
};

export default App;
