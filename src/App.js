import React, { Fragment, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopMenu from "./components/menu/TopMenu";
import LeftMenu from "./components/menu/LeftMenu";
import Dashboard from "./components/Dashboard";
import CreateUser from "./components/CreateUser";
import UserRegistration from "./components/UserRegistration";
import UserDashboard from "./components/UserDashboard";
import Badminton from "./components/Badminton";
import Login from "./components/Login";
import AddExpense from "./components/AddExpense";
import DashWrapper from "./components/DashWrapper";

function App() {
  return (<BrowserRouter>
    <div className="App">




      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<DashWrapper Component={Dashboard} />} />
        <Route path='/create-user' element={<DashWrapper Component={CreateUser} />} />
        <Route path="/user-dashboard" element={<DashWrapper Component={UserDashboard} />} />
        <Route path="/user-registration" element={<DashWrapper Component={UserRegistration} />} />
        <Route path="/book-badminton-court" element={<DashWrapper Component={Badminton} />} />
        <Route path="/add-expense" element={<DashWrapper Component={AddExpense} />} />

      </Routes>



    

    </div>
  </BrowserRouter>
  );
}

export default App;
