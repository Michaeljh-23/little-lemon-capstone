import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAlert } from "../contexts/AlertContext.js";

const Nav = () => {
  const { openAlert } = useAlert();

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        console.warn(`No element found for ${location.hash}`);
      }
    }
  }, [location]);

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <NavLink to="/" className="green-text" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/#about" className="green-text" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/#menu" className="green-text" activeClassName="active">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/booking"
            className="green-text"
            activeClassName="active"
          >
            Reservations
          </NavLink>
        </li>
        <li>
          <p className="green-text mp-none" onClick={() => openAlert(false)}>
            Order Online
          </p>
        </li>
      </ul>
      <div className="hamburger" onClick={() => openAlert(true)}>
        <img src="hamburger.svg" alt="hamburger menu" />
      </div>
    </nav>
  );
};

export default Nav;
