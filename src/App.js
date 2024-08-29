import React, { Fragment, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopMenu from './components/menu/TopMenu';
import LeftMenu from './components/menu/LeftMenu';
import Dashboard from './components/Dashboard';
import CreateUser from './components/CreateUser';
import UserRegistration from './components/UserRegistration';
import UserDashboard from './components/UserDashboard';
import Badminton from './components/Badminton';
import Login from './components/Login';
import AddExpense from './components/AddExpense';

function App() {
  return (<BrowserRouter>
    <div className="App">
      {sessionStorage.getItem('email') ?
        <Fragment>
          <TopMenu />
          <LeftMenu />
          
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/create-user' element={<CreateUser/>} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/user-registration" element={<UserRegistration />} />
        <Route path="/book-badminton-court" element={<Badminton />} />
        <Route path="/add-expense" element={<AddExpense />} />
      </Routes>
    
        </Fragment> :
        <Login />
      }
    </div>
    </BrowserRouter>
  );
}

export default App;
