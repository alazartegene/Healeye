import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./nav.css";


const Navigation = () => {
  let activeStyle = {
    color: "#764af1",
  };
  const [open, setOpen] = useState(false);
  // const activeStyleHunddler = (isActive)=>{

  // // }
  return (
    <>
      <header className="nav-container">
        <div className="nav">
          <div className="nav-logo">
            
            <h1>
              <span>Heal</span>Eye
            </h1>
          </div>
          <div className={`${open ? "nav-links toggle" : "nav-links"}`}>
            <ul>
              <li>
                <NavLink
                  to={"/"}
                  style={({ isActive }) => {
                    return isActive ? activeStyle : undefined;
                  }}
                >
                  Home
                </NavLink>
                {/* <a href="">Home</a> */}
              </li>
              <li>
                <NavLink
                  to={"/book"}
                  style={({ isActive }) => {
                    return isActive ? activeStyle : undefined;
                  }}
                >
                  Book
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/Services"}
                  style={({ isActive }) => {
                    return isActive ? activeStyle : undefined;
                  }}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contacts"}
                  style={({ isActive }) => {
                    return isActive ? activeStyle : undefined;
                  }}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/auth/login"}
                  style={({ isActive }) => {
                    return isActive ? activeStyle : undefined;
                  }}
                >
                  Login
                </NavLink>
              </li>
              <li></li>
            </ul>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className={`${open ? "menu open" : "menu"}`}
          >
            <span className="menu-top"></span>
            <span className="menu-middle"></span>
            <span className="menu-botton"></span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
