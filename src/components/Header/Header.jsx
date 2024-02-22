// Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={`navbar navbar-expand-md navbar-dark ${styles.nav}`}>
      <div className="container">
        <NavLink className={`${styles.title} navbar-brand`} to="/">
          Kha Nguyen
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {" "}
            {/* Align other links to the right */}
            <NavItem to="/" exact>
              Home
            </NavItem>
            {/* <NavItem to="/about">About</NavItem> */}
            <NavItem to="/projects">Projects</NavItem>
            <NavItem to="/contact">Contact</NavItem>
            <li className="nav-item">
              <a
                className="btn btn-outline-light btn btn-light"
                style={{ color: "orange" }}
                href="https://docs.google.com/document/d/1af9q14c_eOnzwWNNH0-BYq9zHhouzq3w/edit?usp=sharing&ouid=112709770876624593876&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ to, children, exact }) => {
  return (
    <li className="nav-item">
      <NavLink
        className={`${styles.navLink} nav-link`}
        activeClassName="active"
        to={to}
        exact={exact}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default Header;
