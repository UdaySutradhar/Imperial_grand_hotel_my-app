import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar({ homeVersion, onSelectHome }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="navbar-logo-symbol">
          <svg width="38" height="38" viewBox="0 0 38 38">
            <circle cx="19" cy="19" r="19" fill="#C19B77"/>
          </svg>
        </span>
        <div>
          <span className="navbar-title">IMPERIAL</span>
          <div className="navbar-subtitle">GRAND HOTEL</div>
        </div>
      </div>
      <div className="navbar-links">
        {/* HOME menu with dropdown */}
        <div
          className="navbar-link navbar-home-dropdown"
          style={{ position: "relative" }}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          HOME <span className="dropdown-arrow">▼</span>
          {dropdownOpen && (
            <div className="navbar-dropdown-menu">
              <div
                className={`navbar-dropdown-item${homeVersion === "home1" ? " active" : ""}`}
                onClick={() => { onSelectHome("home1"); setDropdownOpen(false); }}
              >
                Home Page 1
              </div>
              <div
                className={`navbar-dropdown-item${homeVersion === "home2" ? " active" : ""}`}
                onClick={() => { onSelectHome("home2"); setDropdownOpen(false); }}
              >
                Home Page 2
              </div>
            </div>
          )}
        </div>
        <span className="navbar-link">ABOUT</span>
        <span className="navbar-link">SERVICE</span>
        <span className="navbar-link">
          PAGES <span className="dropdown-arrow">▼</span>
        </span>
        <span className="navbar-link">CONTACT US</span>
      </div>
    </nav>
  );
}
