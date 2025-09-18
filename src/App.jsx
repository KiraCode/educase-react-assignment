import React, { useState } from "react";
import Login from "./components/Login";
import WelcomePage from "./components/WelcomePage";
import Signup from "./components/Signup";
import MyAccount from "./components/MyAccount";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-200">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<MyAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
