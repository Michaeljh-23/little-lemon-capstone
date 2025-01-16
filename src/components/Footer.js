import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer green">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="logo-footer-white.png" alt="Logo" />
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <NavLink to="/" className="" activeClassName="active">
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
              <NavLink to="/#orderonline" className="" activeClassName="active">
                Order Online
              </NavLink>
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
