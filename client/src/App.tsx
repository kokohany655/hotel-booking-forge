import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import { useAppContext } from "./Context/AppContext";
import AddHotel from "./Pages/Hotel/AddHotel";

function App() {
  const { isLoggedIn } = useAppContext();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<div>hello</div>} />
        <Route path="/register" element={<Register />} />
        {isLoggedIn && <Route path="/my-hotels" element={<AddHotel />} />}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;
