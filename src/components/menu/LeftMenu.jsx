import React, { useState } from 'react';
import Logo from '../../assets/images/login-background-2.jpg'
import { Outlet, Link } from "react-router-dom";

function LeftMenu() {
  return (
    <div className="LeftMenu">
      {/* <img src={Logo} className='logo_left' /> */}
      <ul className='main_menu'>
        <li>
          <Link to='/'><i className="fa fa-angle-double-right mg_right_10" aria-hidden="true"></i> Dashboard</Link>
        </li>
        <li>
          <Link to='/create-user'><i className="fa fa-angle-double-right mg_right_10" aria-hidden="true"></i> Create User</Link>
        </li>
        <li className='noLink'>
          User Info
        </li>
        <li>
          <Link to="/user-dashboard">
          <i className="fa fa-angle-double-right mg_right_10" aria-hidden="true"></i> User Dashboard
          </Link>
        </li>
        <li>
          <Link to='/user-registration' >
            <i className="fa fa-angle-double-right mg_right_10" aria-hidden="true"></i> User Registration
          </Link>
        </li>
        <li className='noLink'>
          Book a Court
        </li>
        <li>
          <Link to='/book-badminton-court'>
            <i className="fa fa-angle-double-right mg_right_10" aria-hidden="true"></i> Badminton
          </Link>
        </li>
        <li>
          <i className="fa fa-angle-double-right mg_right_10" aria-hidden="true"></i> Footbal/cricket
        </li>
        <li className='noLink'>
          Finance
        </li>
        <li>
          <Link to='/add-expense'>
            <i className="fa fa-angle-double-right mg_right_10" aria-hidden="true"></i> Add Expense
          </Link>
        </li>
        <li>
          <i className="fa fa-angle-double-right mg_right_10" aria-hidden="true"></i> Finance Dashboard
        </li>
      </ul>
    </div>
  );
}

export default LeftMenu;
