import React, { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
const Navbar = () => {
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("User"));
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <nav className={style.Navbar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/course">Course</Link>
        </li>
        <li>
          {auth ? (
            <span className={style.profileImages}>
              <p>{auth.userData.name}</p>
             <Link to='/profile'>
              <img
                src={`http://localhost:8000/api/userImages/${auth.userData.image}`}
              />
               </Link>
              <button onClick={handleLogout}><LogoutIcon/></button>
            </span>
          ) : (
            <Link to="/login"><LoginIcon/></Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
