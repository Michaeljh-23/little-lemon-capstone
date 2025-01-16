import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import AlertDialougue from "./AlertDialogue";

const Nav = () => {
  const location = useLocation();

  function openAlert() {
    const alertContainer = document.getElementById("alert-container");
    alertContainer.classList.add("visible");
  }

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
          <NavLink
            to="/#orderonline"
            className="green-text"
            activeClassName="active"
            onClick={openAlert}
          >
            Order Online
          </NavLink>
        </li>
      </ul>
      <AlertDialougue />
    </nav>
  );
};

export default Nav;
