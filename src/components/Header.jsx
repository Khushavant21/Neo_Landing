import React, { useState } from "react";
import "../styles/Header.css";
import logoSrc from "../assets/neobank-logoo.png"; // your logo 

export default function Header({ headerLogoRef }) {
  const [openLogin, setOpenLogin] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuItems = [
    "Personal",
    "NRI",
    "Business",
    "iShop",
    "Resources",
    "About",
    "Help",
    "Complaints",
  ];

  const handleMenuClick = (item) => {
    alert(`You clicked ${item} menu item!`);
  };

  const handleClientLogin = () => {
    alert("Redirecting to Client Login...");
  };

  const handleAdminLogin = () => {
    alert("Redirecting to Admin Login...");
  };

  // Clicking logo or brand reloads the website
  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Left Section: Logo + Brand */}
        <div className="header-left" onClick={handleLogoClick}>
          <img
            ref={headerLogoRef}
            src={logoSrc}
            alt="NeoBank"
            className="brand-mark"
          />
          <div className="brand-text">
            <div className="brand-name">NeoBank</div>
            <div className="brand-id">Digital Partner</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`main-nav ${mobileMenu ? "open" : ""}`}>
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => handleMenuClick(item)}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Section: Phone + Login */}
        <div className="header-right">
          <div className="phone">📞 1800 1080</div>

          <div className="login-wrap">
            <button
              className="login-btn"
              onClick={() => setOpenLogin((s) => !s)}
              aria-haspopup="true"
              aria-expanded={openLogin}
            >
              Login
              <span className="arrow">{openLogin ? "▲" : "▼"}</span>
            </button>

            {openLogin && (
              <div
                className="login-dropdown"
                onMouseLeave={() => setOpenLogin(false)}
              >
                <button className="login-option" onClick={handleClientLogin}>
                  Client Login
                </button>
                <button className="login-option" onClick={handleAdminLogin}>
                  Admin Login
                </button>
              </div>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenu((s) => !s)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
