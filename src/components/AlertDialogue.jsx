import React from "react";
import { useAlert } from "../contexts/AlertContext";
import { NavLink } from "react-router";

const AlertDialougue = () => {
  const { isAlertVisible, isMobileView, closeAlert } = useAlert();

  return (
    <div
      className={`alert-dialog ${isAlertVisible ? "visible" : ""} ${
        isMobileView ? "mobile" : ""
      }`}
      role="dialog"
      id="alert-container"
      aria-hidden={!isAlertVisible}
    >
      <div className="alert-content">
        <button className="close-btn" onClick={closeAlert} aria-label="Close">
          ×
        </button>
        {isMobileView ? (
          <ul className="mobile-nav">
            <li>
              <NavLink
                to="/#hero"
                className="green-text"
                activeClassName="active"
                onClick={closeAlert}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/#about"
                className="green-text"
                activeClassName="active"
                onClick={closeAlert}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/#menu"
                className="green-text"
                activeClassName="active"
                onClick={closeAlert}
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/booking"
                className="green-text"
                activeClassName="active"
                onClick={closeAlert}
              >
                Reservations
              </NavLink>
            </li>
          </ul>
        ) : (
          <p>
            This page doesn’t exist and is not in the current project scope.
            Check back later!
          </p>
        )}
      </div>
    </div>
  );
};

export default AlertDialougue;
