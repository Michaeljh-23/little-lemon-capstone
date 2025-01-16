import { NavLink } from "react-router-dom";
import { useAlert } from "../contexts/AlertContext";

const Footer = () => {
  const { openAlert, srollToTop } = useAlert();

  return (
    <footer className="footer green" aria-labelledby="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="logo-footer-white.png" alt="Little Lemon Logo" />
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <NavLink
                to="/"
                className=""
                activeClassName="active"
                onClick={srollToTop}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/#about" className="" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/#menu" className="" activeClassName="active">
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/booking" className="" activeClassName="active">
                Reservations
              </NavLink>
            </li>
            <li>
              <div
                role="button"
                onClick={() => openAlert(false)}
                className="footer-links"
              >
                <p className="mp-none">Order Online</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="footer-socials">
          <a
            href="https://www.facebook.com"
            id="facebook"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.x.com"
            id="twitter"
            target="_blank"
            rel="noreferrer"
          >
            X
          </a>
          <a
            href="https://www.instagram.com"
            id="insta"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
        <div className="footer-contact">
          <p>Contact Us</p>
          <p>Email: contact@examplelemon.com</p>
          <p>Phone: (123) 45-LEMON</p>
        </div>
      </div>
      <div className="footer-copywrite">
        <p>© 2025 Lil' Lemon Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
