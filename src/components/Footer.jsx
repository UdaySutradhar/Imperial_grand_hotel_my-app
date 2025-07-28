import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-col">
          <div className="footer-logo-title">
            <span className="navbar-logo-symbol" style={{ marginRight: 7 }}>
              <svg width="38" height="38" viewBox="0 0 38 38"><circle cx="19" cy="19" r="19" fill="#C19B77"/></svg>
            </span>
            <span className="navbar-title">IMPERIAL</span>
          </div>
          <div className="navbar-subtitle">GRAND HOTEL</div>
          <div className="footer-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="footer-col">
          <h4 className="footer-col-title">USEFUL LINKS</h4>
          <div className="footer-links">
            <div>HOME</div>
            <div>ABOUT</div>
            <div>SERVICE</div>
            <div>ROOM</div>
          </div>
        </div>
        <div className="footer-col">
          <h4 className="footer-col-title">SUBSCRIBE</h4>
          <div className="footer-subscribe-text">
            Don’t miss to subscribe our news,<br />kindly fill the form below
          </div>
          <form className="footer-subscribe-form">
            <input type="email" placeholder="Your Email Here" />
            <button type="submit">{">"}</button>
          </form>
        </div>
      </div>
      <div className="footer-divider" />
      <div className="footer-social">
        <div className="footer-social-icons">
          <span className="social-circle">T</span>
          <span className="social-circle">F</span>
          <span className="social-circle">Y</span>
          <span className="social-circle">P</span>
          <span className="social-circle">D</span>
        </div>
        <div className="footer-policy-links">
          <span>Privacy Policy</span>
          <span>|</span>
          <span>Terms of Use</span>
        </div>
        <div className="footer-copyright">
          © 2025 Imperial Grand Hotel. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
